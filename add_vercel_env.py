#!/usr/bin/env python3
import requests
import sys

VERCEL_TOKEN = "your_vercel_token_here"
VAR_KEY = "YOUR_VAR_NAME"
VAR_VALUE = "your_var_value"
ENVIRONMENTS = ["production", "preview", "development"]
VAR_TYPE = "plain"  # or "encrypted" for secrets

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
        pagination = data.get("pagination", {})
        next_cursor = pagination.get("next")
        url = f"https://api.vercel.com/v9/projects?limit=100&until={next_cursor}" if next_cursor else None
    return projects


def add_env(project_id, project_name):
    url = f"https://api.vercel.com/v10/projects/{project_id}/env"
    payload = {
        "key": VAR_KEY,
        "value": VAR_VALUE,
        "type": VAR_TYPE,
        "target": ENVIRONMENTS,
    }
    resp = requests.post(url, headers=headers, json=payload)
    if resp.status_code in (200, 201):
        print(f"  OK  {project_name}")
    elif resp.status_code == 409:
        print(f"  SKIP (already exists)  {project_name}")
    else:
        print(f"  ERROR {resp.status_code}  {project_name}: {resp.text}", file=sys.stderr)


def main():
    print("Fetching projects...")
    projects = get_all_projects()
    print(f"Found {len(projects)} projects. Adding '{VAR_KEY}'...\n")
    for p in projects:
        add_env(p["id"], p["name"])
    print("\nDone.")


if __name__ == "__main__":
    main()
