import { getAllEndpoints } from "@/lib/parse-api-docs";
import ApiExplorerClient from "./client";

export const dynamic = "force-static";

export default function ApiExplorerPage() {
  const endpoints = getAllEndpoints();
  return <ApiExplorerClient endpoints={endpoints} />;
}
