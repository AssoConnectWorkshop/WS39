"use client";

import { useState, useMemo } from "react";
import type { Endpoint } from "@/lib/parse-api-docs";

const METHOD_COLORS: Record<string, string> = {
  GET: "bg-blue-100 text-blue-700",
  POST: "bg-green-100 text-green-700",
  PUT: "bg-yellow-100 text-yellow-700",
  PATCH: "bg-orange-100 text-orange-700",
  DELETE: "bg-red-100 text-red-700",
};

const MODULE_LABELS: Record<string, string> = {
  accounting: "Accounting",
  crm: "CRM",
  emailing: "Emailing",
  "business-account": "Business Account",
  payment: "Payment",
  website: "Website",
  others: "Others",
};

function ParamList({ params, label }: { params: Endpoint["pathParams"]; label: string }) {
  if (!params.length) return null;
  return (
    <div className="mt-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{label}</p>
      <ul className="flex flex-col gap-1">
        {params.map((p) => (
          <li key={p.name} className="text-xs flex items-start gap-2">
            <code className="bg-gray-100 px-1 rounded text-gray-700">{p.name}</code>
            {p.type && <span className="text-gray-400">{p.type}</span>}
            {p.required && <span className="text-red-400 font-medium">required</span>}
            {p.description && <span className="text-gray-500">{p.description}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EndpointCard({ ep }: { ep: Endpoint }) {
  const [open, setOpen] = useState(false);
  const hasDetails = ep.pathParams.length + ep.queryParams.length + ep.bodyParams.length > 0;

  return (
    <div className="border rounded-xl overflow-hidden">
      <button
        className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`text-xs font-bold px-2 py-0.5 rounded font-mono shrink-0 ${METHOD_COLORS[ep.method] ?? "bg-gray-100 text-gray-600"}`}>
          {ep.method}
        </span>
        <span className="font-mono text-sm text-gray-800 truncate">{ep.path}</span>
      </button>

      {open && (
        <div className="px-4 pb-4 border-t bg-gray-50 flex flex-col gap-2">
          {ep.description && (
            <p className="text-sm text-gray-600 mt-3">{ep.description}</p>
          )}
          <ParamList params={ep.pathParams} label="Path parameters" />
          <ParamList params={ep.queryParams} label="Query parameters" />
          <ParamList params={ep.bodyParams} label="Request body" />
          {!hasDetails && <p className="text-xs text-gray-400 mt-2">No parameters.</p>}
        </div>
      )}
    </div>
  );
}

export default function ApiExplorerClient({ endpoints }: { endpoints: Endpoint[] }) {
  const [query, setQuery] = useState("");
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [activeResource, setActiveResource] = useState<string | null>(null);

  const modules = useMemo(() => {
    const seen = new Set(endpoints.map((e) => e.module));
    return Array.from(seen);
  }, [endpoints]);

  const resources = useMemo(() => {
    if (!activeModule) return [];
    const seen = new Set(
      endpoints.filter((e) => e.module === activeModule).map((e) => e.resource)
    );
    return Array.from(seen);
  }, [endpoints, activeModule]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (q) {
      return endpoints.filter(
        (e) =>
          e.path.toLowerCase().includes(q) ||
          e.resource.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.method.toLowerCase().includes(q)
      );
    }
    if (activeModule && activeResource) {
      return endpoints.filter(
        (e) => e.module === activeModule && e.resource === activeResource
      );
    }
    return [];
  }, [endpoints, query, activeModule, activeResource]);

  function selectModule(m: string) {
    setActiveModule(m);
    setActiveResource(null);
    setQuery("");
  }

  function selectResource(r: string) {
    setActiveResource(r);
    setQuery("");
  }

  function goBack() {
    setActiveResource(null);
  }

  function goHome() {
    setActiveModule(null);
    setActiveResource(null);
    setQuery("");
  }

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">AssoConnect API Explorer</h1>
          <p className="text-gray-500 text-sm mt-1">{endpoints.length} endpoints across {modules.length} modules</p>
        </div>
        <a href="/api/auth/signout" className="text-xs text-gray-400 hover:text-gray-700 transition-colors mt-1">
          Sign out
        </a>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search across all endpoints…"
        value={query}
        onChange={(e) => { setQuery(e.target.value); if (e.target.value) { setActiveModule(null); setActiveResource(null); } }}
        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl outline-none focus:border-black transition-colors text-sm"
      />

      {/* Breadcrumb */}
      {(activeModule || activeResource) && !query && (
        <div className="flex items-center gap-2 text-sm">
          <button onClick={goHome} className="text-gray-400 hover:text-black transition-colors">All modules</button>
          {activeModule && (
            <>
              <span className="text-gray-300">/</span>
              <button
                onClick={goBack}
                className={`transition-colors ${activeResource ? "text-gray-400 hover:text-black" : "font-semibold text-black"}`}
              >
                {MODULE_LABELS[activeModule] ?? activeModule}
              </button>
            </>
          )}
          {activeResource && (
            <>
              <span className="text-gray-300">/</span>
              <span className="font-semibold text-black">{activeResource}</span>
            </>
          )}
        </div>
      )}

      {/* Module grid */}
      {!activeModule && !query && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {modules.map((m) => {
            const count = endpoints.filter((e) => e.module === m).length;
            return (
              <button
                key={m}
                onClick={() => selectModule(m)}
                className="text-left border-2 border-gray-100 rounded-xl p-4 hover:border-black transition-colors group"
              >
                <p className="font-semibold text-gray-900 group-hover:text-black">{MODULE_LABELS[m] ?? m}</p>
                <p className="text-xs text-gray-400 mt-1">{count} endpoints</p>
              </button>
            );
          })}
        </div>
      )}

      {/* Resource list */}
      {activeModule && !activeResource && !query && (
        <div className="flex flex-col gap-2">
          {resources.map((r) => {
            const count = endpoints.filter((e) => e.module === activeModule && e.resource === r).length;
            return (
              <button
                key={r}
                onClick={() => selectResource(r)}
                className="text-left border rounded-xl px-4 py-3 hover:border-black hover:bg-gray-50 transition-colors flex items-center justify-between group"
              >
                <span className="font-medium text-gray-800 group-hover:text-black">{r}</span>
                <span className="text-xs text-gray-400">{count} endpoint{count !== 1 ? "s" : ""}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Endpoint list */}
      {(activeResource || query) && (
        <>
          {!query && <p className="text-xs text-gray-400">{filtered.length} endpoint{filtered.length !== 1 ? "s" : ""}</p>}
          {query && <p className="text-xs text-gray-400">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>}
          <div className="flex flex-col gap-2">
            {filtered.map((ep, i) => (
              <EndpointCard key={`${ep.method}-${ep.path}-${i}`} ep={ep} />
            ))}
            {filtered.length === 0 && (
              <p className="text-gray-400 text-sm text-center py-12">No endpoints found.</p>
            )}
          </div>
        </>
      )}
    </main>
  );
}
