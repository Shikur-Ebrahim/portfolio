"use server";

import { prisma } from "@/lib/prisma";
import { newsletterSchema } from "@/lib/validations";

export async function subscribeNewsletter(formData: unknown) {
  const parsed = newsletterSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    await prisma.newsletter.upsert({
      where: { email: parsed.data.email },
      update: {},
      create: { email: parsed.data.email },
    });
    return { success: true, message: "You've successfully subscribed to the newsletter!" };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return { success: false, error: "Failed to subscribe. Please try again." };
  }
}
