"use server";
import {z} from "zod";
import {signupSchema} from "@/schemas";

export async function Signup(values: z.infer<typeof signupSchema>) {
  try {
    const res = await fetch(process.env.SERVER_URL + "/auth/registration/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    // If the response is not OK, throw an error with the response message
    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.message?.[0] || "Failed to sign up!");
    }
    
    const response = await res.json();

    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Failed to sign up!");
    }
  }
}
