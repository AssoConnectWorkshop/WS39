"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ERROR_MESSAGES: Record<string, string> = {
  unauthorized: "Only @assoconnect.com accounts are allowed.",
  not_admin: "Your account does not have master admin privileges.",
  no_code: "Authentication was cancelled.",
  server_error: "Something went wrong. Please try again.",
};

function LoginForm() {
  const params = useSearchParams();
  const error = params.get("error");
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.endsWith("@assoconnect.com")) {
      setValidationError("Only @assoconnect.com email addresses are allowed.");
      return;
    }
    window.location.href = `/api/auth/assoconnect?email=${encodeURIComponent(email)}`;
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-8 bg-white">
      <div className="w-full max-w-sm flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">API Explorer</h1>
          <p className="text-gray-500 text-sm mt-1">Master admins only</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
            {ERROR_MESSAGES[error] ?? "Authentication failed."}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700" htmlFor="email">
              AssoConnect email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@assoconnect.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setValidationError(""); }}
              className="px-4 py-2.5 border-2 border-gray-200 rounded-xl outline-none focus:border-black transition-colors text-sm"
              autoFocus
              required
            />
            {validationError && (
              <p className="text-xs text-red-500">{validationError}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-black text-white rounded-xl px-4 py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Continue with AssoConnect SSO →
          </button>
        </form>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
