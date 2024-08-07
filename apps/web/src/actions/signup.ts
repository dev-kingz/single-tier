"use server";
import {z} from "zod";
import {signupSchema} from "@/schemas/dto";
import {api} from "@/config/axios.config";
import {userSchema} from "@/schemas/models";
import axios from "axios";

export async function Signup(values: z.infer<typeof signupSchema>) {
  try {
    const {data} = await api.post("/auth/registration/register", values);

    const user = await userSchema.parseAsync(data);

    return user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        // Do something with this error...
        const {message} = error.response.data;
        console.table(message);
        throw new Error(message);
      } else {
        console.error(error.message);
        throw new Error("Failed to signup!");
      }
    } else {
      console.error(error);
    }
  }
}
