import { readFileSync, readdirSync } from "fs";
import { join } from "path";

export type Param = {
  name: string;
  type: string;
  required: boolean;
  description: string;
};

export type Endpoint = {
  method: string;
  path: string;
  description: string;
  module: string;
  resource: string;
  pathParams: Param[];
  queryParams: Param[];
  bodyParams: Param[];
};

const METHOD_RE = /^### `(GET|POST|PUT|PATCH|DELETE) ([^`]+)`/;
const RESOURCE_RE = /^## (.+)/;
const PARAM_RE = /^- `([^`]+)`(?:\s+`([^`]*)`)?(?:\s+\*(required)\*)?\s*(?:—\s*(.*))?$/;

function parseModule(content: string, module: string): Endpoint[] {
  const lines = content.split("\n");
  const endpoints: Endpoint[] = [];

  let currentResource = "";
  let current: Partial<Endpoint> | null = null;
  let section: "path" | "query" | "body" | null = null;

  function flush() {
    if (current?.method && current?.path) {
      endpoints.push(current as Endpoint);
    }
    current = null;
    section = null;
  }

  for (const line of lines) {
    const methodMatch = line.match(METHOD_RE);
    if (methodMatch) {
      flush();
      current = {
        method: methodMatch[1],
        path: methodMatch[2],
        description: "",
        module,
        resource: currentResource,
        pathParams: [],
        queryParams: [],
        bodyParams: [],
      };
      continue;
    }

    const resourceMatch = line.match(RESOURCE_RE);
    if (resourceMatch && !line.startsWith("###")) {
      currentResource = resourceMatch[1].trim();
      continue;
    }

    if (!current) continue;

    if (!current.description && line.trim() && !line.startsWith("#") && !line.startsWith("**") && !line.startsWith("-")) {
      current.description = line.trim();
      continue;
    }

    if (line.includes("**Path parameters:**")) { section = "path"; continue; }
    if (line.includes("**Query parameters:**")) { section = "query"; continue; }
    if (line.includes("**Request body:**")) { section = "body"; continue; }
    if (line.startsWith("---")) { flush(); continue; }

    if (section && line.startsWith("- ")) {
      const m = line.match(PARAM_RE);
      if (m) {
        const param: Param = {
          name: m[1],
          type: m[2] ?? "",
          required: !!m[3],
          description: m[4]?.trim() ?? "",
        };
        if (section === "path") current.pathParams!.push(param);
        else if (section === "query") current.queryParams!.push(param);
        else current.bodyParams!.push(param);
      }
    }
  }

  flush();
  return endpoints;
}

export function getAllEndpoints(): Endpoint[] {
  const docsDir = join(process.cwd(), "docs", "api");
  const files = readdirSync(docsDir).filter((f) => f.endsWith(".md"));

  return files.flatMap((file) => {
    const moduleName = file.replace(".md", "");
    const content = readFileSync(join(docsDir, file), "utf-8");
    return parseModule(content, moduleName);
  });
}
