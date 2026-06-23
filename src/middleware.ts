import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const COOKIE = "ac_explorer_session";

function getSecret() {
  const s = process.env.SESSION_SECRET;
  if (!s) return null;
  return new TextEncoder().encode(s);
}

async function isAuthenticated(req: NextRequest): Promise<boolean> {
  const secret = getSecret();
  if (!secret) return false;
  const token = req.cookies.get(COOKIE)?.value;
  if (!token) return false;
  try {
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  // Allow the login page and auth routes through
  if (
    req.nextUrl.pathname.startsWith("/api-explorer/login") ||
    req.nextUrl.pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  if (await isAuthenticated(req)) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/api-explorer/login", req.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: "/api-explorer/:path*",
};
