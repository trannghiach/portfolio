import { createHash, timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

const flagHashes: Record<string, string | undefined> = {
  "support-dashboard": process.env.FLAG_SUPPORT_DASHBOARD_SHA256,
  relayops: process.env.FLAG_RELAYOPS_SHA256,
};

function sha256(input: string) {
  return createHash("sha256").update(input.trim()).digest("hex");
}

function safeCompare(a: string, b: string) {
  const aBuffer = Buffer.from(a, "hex");
  const bBuffer = Buffer.from(b, "hex");

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return timingSafeEqual(aBuffer, bBuffer);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const projectId = String(body.projectId || "");
    const flag = String(body.flag || "");

    const expectedHash = flagHashes[projectId];

    if (!expectedHash) {
      return NextResponse.json(
        { ok: false, error: "challenge_not_configured" },
        { status: 404 },
      );
    }

    const submittedHash = sha256(flag);
    const ok = safeCompare(submittedHash, expectedHash);

    return NextResponse.json({
      ok,
      message: ok ? "flag accepted" : "invalid flag",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "bad_request" },
      { status: 400 },
    );
  }
}