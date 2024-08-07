"use client";
import {logout, selectUser, setSession} from "@/store/slices/user.slice";
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
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

        // look for the accessToken cookie in the response headers
        const accessToken = headers["set-cookie"]?.find((cookie: string) =>
          cookie.startsWith("accessToken"),
        );

        const user = await sessionSchema.parseAsync(data);

        if (!user && !accessToken) {
          dispatch(logout());
          deleteCookie("accessToken");
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
