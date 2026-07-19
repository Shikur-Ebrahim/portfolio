import { NextResponse } from "next/server";

const ADMIN_API_KEY = process.env.ADMIN_API_KEY || "super-secure-admin-key-2026";

export async function POST(req: Request) {
  try {
    const { apiKey } = await req.json();
    if (apiKey === ADMIN_API_KEY) {
      return NextResponse.json({ success: true, token: ADMIN_API_KEY });
    }
    return NextResponse.json({ error: "Invalid API Key" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
