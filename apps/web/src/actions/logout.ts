"use server";
import {api} from "@/config/axios.config";
import axios from "axios";
import {cookies} from "next/headers";

export async function Logout() {
  try {
    const {data} = await api.post("auth/authenticator/login");

    // clear the accessToken cookie
    cookies().delete("accessToken");

    const message = data.message;

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
