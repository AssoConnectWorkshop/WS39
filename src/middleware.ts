import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const password = process.env.API_EXPLORER_PASSWORD;
  if (!password) return NextResponse.next();

  const auth = req.headers.get("authorization");
  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = Buffer.from(encoded, "base64").toString("utf-8");
      const [, pass] = decoded.split(":");
      if (pass === password) return NextResponse.next();
    }
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="API Explorer"',
    },
  });
}

export const config = {
  matcher: "/api-explorer/:path*",
};
