"use server";

import { prisma } from "@/lib/prisma";

export async function getAllProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { created_at: "desc" },
    });
    return { success: true, data: projects };
  } catch (error) {
    console.error("Fetch projects error:", error);
    return { success: false, data: [], error: "Failed to fetch projects." };
  }
}

export async function getFeaturedProjects() {
  try {
    const projects = await prisma.project.findMany({
      where: { featured: true },
      orderBy: { created_at: "desc" },
      take: 6,
    });
    return { success: true, data: projects };
  } catch (error) {
    console.error("Fetch featured projects error:", error);
    return { success: false, data: [], error: "Failed to fetch projects." };
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { slug },
    });
    return { success: true, data: project };
  } catch (error) {
    console.error("Fetch project by slug error:", error);
    return { success: false, data: null, error: "Failed to fetch project." };
  }
}
