"use server";
import axios from "axios";
import {z} from "zod";
import {loginSchema} from "@/schemas/dto";
import {api} from "@/config/axios.config";
import {sessionSchema} from "@/schemas/models";

export async function Login(values: z.infer<typeof loginSchema>) {
  try {
    const {data} = await api.post("auth/authenticator/login", values);

    const accessToken = data?.accessToken;

    if (!accessToken) {
      throw new Error("Failed to login!");
    }

    const {data: session} = await api.get("/auth/authenticator/getSession", {
      headers: {Authorization: `Bearer ${accessToken}`},
    });

    const user = await sessionSchema.parseAsync(session);

    if (!user) {
      throw new Error("Failed to login!");
    }

    return {
      user,
      accessToken,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        // Do something with this error...
        const {message} = error.response.data;
        return {error: message};
      } else {
        console.error(error.message);
        throw new Error("Failed to login!");
      }
    } else {
      console.error(error);
    }
  }
}

function extractTokenFromRequest(authorizationString: string) {
  const [type, token] = authorizationString?.split(" ") ?? [];
  return type === "Bearer" ? token : undefined;
}
