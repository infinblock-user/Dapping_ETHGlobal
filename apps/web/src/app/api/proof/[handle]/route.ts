import { NextResponse } from "next/server";
import { proofScore } from "@dapping/proof-core";
import { getProfile } from "@/lib/profiles";

export async function GET(_req: Request, { params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const profile = getProfile(handle);
  if (!profile) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
  return NextResponse.json({ ...profile, score: proofScore(profile) });
}
