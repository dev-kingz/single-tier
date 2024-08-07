"use server";
import {z} from "zod";
import {loginSchema} from "@/schemas/dto";
import {api} from "@/config/axios.config";
import axios from "axios";
import {sessionSchema} from "@/schemas/models";
import {cookies} from "next/headers";

export async function Login(values: z.infer<typeof loginSchema>) {
  try {
    const {data, headers} = await api.post("auth/authenticator/login", values);

    // look for the accessToken cookie in the response headers
    const accessToken = headers["set-cookie"]?.find((cookie: string) =>
      cookie.startsWith("accessToken"),
    );

    if (!accessToken) {
      throw new Error("Failed to login!");
    }

    cookies().set("acessToken", accessToken, {
      httpOnly: true,
    });

    const message = data.message;

    // const user = await sessionSchema.parseAsync(data);

    return message;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        // Do something with this error...
        const {message} = error.response.data;
        console.table(message);
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
