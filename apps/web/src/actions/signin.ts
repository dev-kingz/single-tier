"use server";
import {signIn} from "@/auth";
import {loginSchema} from "@/schemas";
import {z} from "zod";

export async function SignIn(formData: z.infer<typeof loginSchema>) {
  try {
    const response = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    return response;
  } catch (error) {
    throw new Error(error as any);
  }
}
