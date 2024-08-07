"use server";
import {z} from "zod";
import {loginSchema} from "@/schemas/dto";
import {api} from "@/config/axios.config";
import axios from "axios";
import {cookies} from "next/headers";
import {CookieParser} from "@/lib/cookie-parser";

export async function Login(values: z.infer<typeof loginSchema>) {
  try {
    const {data, headers} = await api.post("auth/authenticator/login", values);

    // look for the accessToken cookie in the response headers
    const accessTokenString = headers["set-cookie"]?.find((cookie: string) =>
      cookie.startsWith("accessToken"),
    );

    if (!accessTokenString) {
      cookies().delete("acessToken");
      throw new Error("Failed to login!");
    }
    // extract the accessToken from the cookie string
    const accessToken = CookieParser(accessTokenString);

    // set the accessToken cookie
    cookies().set("acessToken", accessToken?.accessToken, {
      secure: accessToken?.secure === "true" || false,
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
