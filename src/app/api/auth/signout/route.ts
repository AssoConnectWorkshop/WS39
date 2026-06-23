import { NextRequest, NextResponse } from "next/server";
import { clearSession } from "@/lib/session";

export async function GET(req: NextRequest) {
  await clearSession();
  const url = new URL("/api-explorer/login", req.url);
  return NextResponse.redirect(url);
}
