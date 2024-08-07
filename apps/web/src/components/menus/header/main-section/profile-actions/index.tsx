"use client";
import React from "react";
import AuthModal from "@/components/auth/modals";
import {useSelector} from "react-redux";
import {selectUser} from "@/store/slices/user.slice";
import {LogoutForm} from "@/components/auth/forms";

const ProfileActions = () => {
  const {user} = useSelector(selectUser);

  if (user) {
    return <LogoutForm />;
  }

  return (
    <>
      <div className="ProfileActions flexi hidden gap-x-2 sm:flex">
        <AuthModal
          defaultAction="login"
          triggerStyles="bg-transparent text-foreground w-full hidden sm:flex"
        />
        <AuthModal triggerStyles="w-full hidden sm:flex" />
      </div>
    </>
  );
};

export default ProfileActions;
