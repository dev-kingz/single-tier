"use server";
import {z} from "zod";
import {loginSchema} from "@/schemas";

export async function SignIn(values: z.infer<typeof loginSchema>) {
  try {
    // const response = await signIn("credentials", {
    //   email: values.email,
    //   password: values.password,
    //   stayLoggedIn: values.stayLoggedIn,
    //   redirect: false,
    // });

    // return response;
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
