"use client";
import {logout, setSession, setAccessToken, setLoading} from "@/store/slices/user.slice";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {sessionSchema} from "@/schemas/models";
import {api} from "@/config/axios.config";

const Auth = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // Local state to store the accessToken
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // If window is mounted, get the accessToken from localStorage
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      setToken(token);
    }
  }, []);

  useEffect(() => {
    async function checkUser() {
      try {
        const {data} = await api.get("/auth/authenticator/getSession", {
          headers: {Authorization: `Bearer ${token}`},
        });
        const user = await sessionSchema.parseAsync(data);

        if (user) {
          dispatch(setAccessToken(token));
          dispatch(setSession(user));
          dispatch(setLoading(false));
        } else {
          dispatch(logout());
          dispatch(setLoading(false));
          localStorage.removeItem("accessToken");
        }
      } catch (error) {
        dispatch(logout());
        dispatch(setLoading(false));
        localStorage.removeItem("accessToken");
      }
    }

    // Only check the session if there is an accessToken
    if (token) {
      checkUser();
    }
    dispatch(logout());
    dispatch(setLoading(false));
  }, [token, dispatch, router]);

  return <></>;
};

export {Auth};
