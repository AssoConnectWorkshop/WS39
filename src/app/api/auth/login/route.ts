import { NextRequest, NextResponse } from "next/server";
import { setSession } from "@/lib/session";

const VALID_EMAIL = "workshop-summer-seminar-2026@assoconnect.com";
const VALID_PASSWORD = "uPX7o7HxZ-zY_PU_MsU-";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  await setSession({ email, personId: "", accessToken: "" });
  return NextResponse.json({ ok: true });
}
