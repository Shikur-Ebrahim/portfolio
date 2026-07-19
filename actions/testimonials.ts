"use server";

import { prisma } from "@/lib/prisma";

export async function getApprovedTestimonials() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { approved: true },
      orderBy: { created_at: "desc" },
    });
    return { success: true, data: testimonials };
  } catch (error) {
    console.error("Fetch testimonials error:", error);
    return { success: false, data: [], error: "Failed to fetch testimonials." };
  }
}
