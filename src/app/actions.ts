"use server";

import { aiContentRecommendations } from "@/ai/flows/ai-content-recommendations";
import { z } from "zod";

export async function getRecommendations(
  projectDescriptions: string[],
  visitorInterests: string
) {
  try {
    const result = await aiContentRecommendations({
      portfolioItems: projectDescriptions,
      visitorInterests: visitorInterests,
    });
    return { success: true, data: result.recommendedItems };
  } catch (error) {
    console.error("AI recommendation error:", error);
    return { success: false, error: "Failed to get recommendations." };
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  // In a real application, you would send an email here.
  // For this example, we'll just log the data.
  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    errors: {},
    success: true,
  };
}
