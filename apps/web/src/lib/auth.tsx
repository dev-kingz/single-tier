"use client";
import {logout, setSession} from "@/store/slices/user.slice";
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCookie, deleteCookie} from "cookies-next";
import {sessionSchema} from "@/schemas/models";
import {api} from "@/config/axios.config";

const Auth = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // Check if user is authenticated by having a useEffect that calls the getSession API function each time the cookie named "accessToken" is changed and also on each page load.

  useEffect(() => {
    async function checkUser() {
      try {
        const {data, headers} = await api.get("/auth/authenticator/getSession");
        console.log("----------data", data);
        console.log("--------------------headers", headers);

        // look for the accessToken cookie in the response headers
        const accessToken = headers["set-cookie"]?.find((cookie: string) =>
          cookie.startsWith("accessToken"),
        );

        const user = await sessionSchema.parseAsync(data);

        if (!user && !accessToken) {
          dispatch(logout());
          deleteCookie("acessToken");
          return;
        }

        dispatch(setSession(user));
      } catch (error) {
        dispatch(logout());
      }
    }
    checkUser();
  }, [router, getCookie("accessToken")]);

  return <></>;
};

export {Auth};
