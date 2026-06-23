import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const clientId = process.env.ASSOCONNECT_OAUTH_CLIENT_ID;
  if (!clientId) throw new Error("ASSOCONNECT_OAUTH_CLIENT_ID is not set");

  const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;
  const email = req.nextUrl.searchParams.get("email") ?? "";

  const url = new URL("https://app.assoconnect.com/oauth2/authorize");
  url.searchParams.set("response_type", "code");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", callbackUrl);
  url.searchParams.set("scope", "all");
  if (email) url.searchParams.set("login_hint", email);

  redirect(url.toString());
}
