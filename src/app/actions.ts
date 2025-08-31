
"use server";

import { aiContentRecommendations } from "@/ai/flows/ai-content-recommendations";
import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
      success: false,
    };
  }

  try {
    await addDoc(collection(db, "messages"), {
      ...validatedFields.data,
      createdAt: serverTimestamp(),
    });
    return {
      message: "Thank you for your message! I'll get back to you soon.",
      errors: {},
      success: true,
    };
  } catch (error) {
    console.error("Error writing to Firestore: ", error);
    return {
        message: "An error occurred while sending your message. Please try again.",
        errors: {},
        success: false,
    };
  }
}
