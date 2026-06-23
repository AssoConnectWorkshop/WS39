import { NextRequest, NextResponse } from "next/server";
import { setSession } from "@/lib/session";

const AC_BASE = "https://app.assoconnect.com";
const API_BASE = "https://app.assoconnect.com/api/v1";

type TokenResponse = {
  access_token: string;
  token_type: string;
};

type PersonMe = {
  contactId: string;
  email?: string;
  firstName?: string;
  lastName?: string;
};

type UserOrgRole = {
  "@id": string;
  role?: string;
  type?: string;
  name?: string;
};

type Collection<T> = {
  "hydra:member": T[];
};

async function exchangeCode(code: string, redirectUri: string): Promise<TokenResponse> {
  const res = await fetch(`${AC_BASE}/oauth2/access_token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      client_id: process.env.ASSOCONNECT_OAUTH_CLIENT_ID!,
      client_secret: process.env.ASSOCONNECT_OAUTH_CLIENT_SECRET!,
    }),
  });
  if (!res.ok) throw new Error(`Token exchange failed: ${res.status}`);
  return res.json();
}

async function getPersonMe(accessToken: string): Promise<PersonMe> {
  const res = await fetch(`${API_BASE}/crm/person/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/ld+json",
    },
  });
  if (!res.ok) throw new Error(`/crm/person/me failed: ${res.status}`);
  return res.json();
}

async function isMasterAdmin(personId: string, accessToken: string): Promise<boolean> {
  // Extract the raw ULID from the IRI (e.g. "/api/v1/crm/contacts/01ABCD..." -> "01ABCD...")
  const id = personId.split("/").pop()!;
  const res = await fetch(`${API_BASE}/crm/people/${id}/user_organization_roles?pagination=false`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/ld+json",
    },
  });
  if (!res.ok) return false;
  const data: Collection<UserOrgRole> = await res.json();
  const roles = data["hydra:member"] ?? [];
  // Master admin roles in AssoConnect are typically platform-level.
  // Adjust these values once you observe what the API returns.
  const MASTER_ADMIN_ROLES = ["ROLE_SUPER_ADMIN", "ROLE_PLATFORM_ADMIN", "master_admin", "super_admin", "platform_admin"];
  return roles.some((r) =>
    MASTER_ADMIN_ROLES.some((mr) =>
      JSON.stringify(r).toLowerCase().includes(mr.toLowerCase())
    )
  );
}

export async function GET(req: NextRequest) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL!;
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${appUrl}/api-explorer/login?error=no_code`);
  }

  try {
    const redirectUri = `${appUrl}/api/auth/callback`;
    const { access_token } = await exchangeCode(code, redirectUri);
    const person = await getPersonMe(access_token);

    const email = person.email ?? "";
    if (!email.endsWith("@assoconnect.com")) {
      return NextResponse.redirect(`${appUrl}/api-explorer/login?error=unauthorized`);
    }

    const admin = await isMasterAdmin(person.contactId, access_token);
    if (!admin) {
      return NextResponse.redirect(`${appUrl}/api-explorer/login?error=not_admin`);
    }

    await setSession({ email, personId: person.contactId, accessToken: access_token });
    return NextResponse.redirect(`${appUrl}/api-explorer`);
  } catch (e) {
    console.error("OAuth callback error:", e);
    return NextResponse.redirect(`${appUrl}/api-explorer/login?error=server_error`);
  }
}
