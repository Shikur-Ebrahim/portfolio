import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

export async function GET(req: Request) {
  const authHeader = req.headers.get("Authorization");
  if (authHeader !== `Bearer ${ADMIN_API_KEY}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const requests = await prisma.contact.findMany({
      orderBy: { created_at: "desc" },
    });
    return NextResponse.json(requests);
  } catch (error) {
    console.error("Error fetching requests:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
