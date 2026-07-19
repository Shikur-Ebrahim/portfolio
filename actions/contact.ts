"use server";

import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";

export async function submitContact(formData: unknown) {
  const parsed = contactSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: "Invalid form data. Please check your inputs." };
  }

  try {
    await prisma.contact.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone ?? null,
        company: parsed.data.company ?? null,
        subject: parsed.data.subject,
        message: parsed.data.message,
      },
    });
    revalidatePath("/contact");
    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Contact submission error:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
