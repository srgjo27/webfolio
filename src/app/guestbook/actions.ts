"use server";

import { z } from "zod";
import { firestore } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { revalidatePath } from "next/cache";

const GuestbookSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required." }).max(50, { message: "Name cannot be longer than 50 characters." }),
  message: z.string().trim().min(1, { message: "Message is required." }).max(500, { message: "Message cannot be longer than 500 characters." }),
});

export async function addEntry(prevState: any, formData: FormData) {
  if (!firestore) {
    return {
      error: { formErrors: ["Firebase is not configured. Please add your Firebase project configuration to the .env file."], fieldErrors: {} },
      message: null 
    };
  }

  const result = GuestbookSchema.safeParse({
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return { error: result.error.flatten(), message: null };
  }

  try {
    await addDoc(collection(firestore, "guestbook"), {
      name: result.data.name,
      message: result.data.message,
      createdAt: serverTimestamp(),
    });

    revalidatePath("/guestbook");
    return { error: null, message: "Your entry has been added!" };
  } catch (e) {
    console.error(e);
    return { 
      error: { formErrors: ["Failed to add entry. Please try again."], fieldErrors: {} },
      message: null 
    };
  }
}
