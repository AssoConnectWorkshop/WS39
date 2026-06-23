#!/usr/bin/env python3
import requests
import sys

VERCEL_TOKEN = "your_vercel_token_here"
VAR_KEY = "YOUR_VAR_NAME"

headers = {
    "Authorization": f"Bearer {VERCEL_TOKEN}",
    "Content-Type": "application/json",
}


def get_all_projects():
    projects = []
    url = "https://api.vercel.com/v9/projects?limit=100"
    while url:
        resp = requests.get(url, headers=headers)
        resp.raise_for_status()
        data = resp.json()
        projects.extend(data.get("projects", []))
        next_cursor = data.get("pagination", {}).get("next")
        url = f"https://api.vercel.com/v9/projects?limit=100&until={next_cursor}" if next_cursor else None
    return projects


def make_sensitive(project_id, project_name):
    # Fetch all env vars for the project
    resp = requests.get(f"https://api.vercel.com/v9/projects/{project_id}/env", headers=headers)
    resp.raise_for_status()
    envs = resp.json().get("envs", [])

    matches = [e for e in envs if e["key"] == VAR_KEY]
    if not matches:
        print(f"  NOT FOUND  {project_name}")
        return

    for env in matches:
        if env.get("type") == "encrypted":
            print(f"  ALREADY SENSITIVE  {project_name}")
            continue

        env_id = env["id"]
        # To change type to encrypted we must provide the value again
        # The value is masked, so we re-read it first (only works for plain/system types)
        value = env.get("value", "")

        patch_resp = requests.patch(
            f"https://api.vercel.com/v9/projects/{project_id}/env/{env_id}",
            headers=headers,
            json={"type": "encrypted", "value": value},
        )
        if patch_resp.status_code == 200:
            print(f"  OK  {project_name}")
        else:
            print(f"  ERROR {patch_resp.status_code}  {project_name}: {patch_resp.text}", file=sys.stderr)


def main():
    print("Fetching projects...")
    projects = get_all_projects()
    print(f"Found {len(projects)} projects. Marking '{VAR_KEY}' as sensitive...\n")
    for p in projects:
        make_sensitive(p["id"], p["name"])
    print("\nDone.")


if __name__ == "__main__":
    main()
