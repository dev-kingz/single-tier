"use client";
import {logout, setSession, setAccessToken, setStatus} from "@/store/slices/user.slice";
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {sessionSchema} from "@/schemas/models";
import {api} from "@/config/axios.config";

const Auth = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    async function checkUser(token: string) {
      dispatch(setStatus("pending"));

      try {
        const {data} = await api.get("/auth/authenticator/getSession", {
          headers: {Authorization: `Bearer ${token}`},
        });
        const user = await sessionSchema.parseAsync(data);

        if (user) {
          dispatch(setSession(user));
          dispatch(setAccessToken(token));
          dispatch(setStatus("fulfilled"));
        } else {
          dispatch(logout());
          localStorage.removeItem("accessToken");
        }
      } catch (error) {
        dispatch(logout());
        localStorage.removeItem("accessToken");
      }
    }
    // If window is mounted, get the accessToken from localStorage
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");

      // Only check the session if there is an accessToken
      if (token) {
        checkUser(token);
      } else {
        console.log("No token found");
        dispatch(logout());
      }
    }
  }, [dispatch, router]);

  return <></>;
};

export {Auth};
