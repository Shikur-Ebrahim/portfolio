import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const ADMIN_API_KEY = process.env.ADMIN_API_KEY || "super-secure-admin-key-2026";

export async function GET(req: Request) {
  const authHeader = req.headers.get("Authorization");
  if (authHeader !== `Bearer ${ADMIN_API_KEY}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const [totalRequests, pending, inProgress, completed] = await Promise.all([
      prisma.contact.count(),
      prisma.contact.count({ where: { status: "pending" } }),
      prisma.contact.count({ where: { status: "in_progress" } }),
      prisma.contact.count({ where: { status: "completed" } }),
    ]);

    return NextResponse.json({
      totalRequests,
      pending,
      inProgress,
      completed,
    });
  } catch (error) {
    console.error("Error fetching statistics:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
