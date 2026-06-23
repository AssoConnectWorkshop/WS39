import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE = "ac_explorer_session";
const TTL = 60 * 60; // 1h — matches AssoConnect access token lifetime

function getSecret() {
  const s = process.env.ASSOCONNECT_API_KEY;
  if (!s) throw new Error("ASSOCONNECT_API_KEY is not set");
  return new TextEncoder().encode(s);
}

export type Session = {
  email: string;
  personId: string;
  accessToken: string;
};

export async function setSession(data: Session) {
  const token = await new SignJWT(data as unknown as Record<string, unknown>)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(`${TTL}s`)
    .sign(getSecret());

  const jar = await cookies();
  jar.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: TTL,
    path: "/",
  });
}

export async function getSession(): Promise<Session | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload as unknown as Session;
  } catch {
    return null;
  }
}

export async function clearSession() {
  const jar = await cookies();
  jar.delete(COOKIE);
}
