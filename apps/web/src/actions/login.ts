"use server";
import axios from "axios";
import {z} from "zod";
import {loginSchema} from "@/schemas/dto";
import {api} from "@/config/axios.config";
import {sessionSchema} from "@/schemas/models";

export async function Login(values: z.infer<typeof loginSchema>) {
  try {
    const {headers} = await api.post("auth/authenticator/login", values);

    // Get AccessToken from Authorization Bearer Header `Bearer ${accessToken}`
    const accessToken = headers.authorization.split(" ")[1];

    const {data} = await api.get("/auth/authenticator/getSession", {
      headers: {Authorization: `Bearer ${accessToken}`},
    });

    const user = await sessionSchema.parseAsync(data);

    if (!user) {
      throw new Error("Failed to login!");
    }

    return user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        // Do something with this error...
        const {message} = error.response.data;
        throw new Error(message);
      } else {
        console.error(error.message);
        throw new Error("Failed to login!");
      }
    } else {
      console.error(error);
    }
  }
}
