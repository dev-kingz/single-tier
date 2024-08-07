import React from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useDispatch} from "react-redux";
import {logout} from "@/store/slices/user.slice";

interface LogoutProps {
  triggerStyles?: string;
}

export const LogoutForm = ({triggerStyles}: LogoutProps) => {
  const dispatch = useDispatch();

  async function handleLogout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(logout());
    localStorage.removeItem("accessToken");
  }

  return (
    <form onSubmit={handleLogout}>
      <Button
        type="submit"
        variant="primary"
        rounded={"full"}
        className={cn("Trigger", triggerStyles)}
      >
        Logout
      </Button>
    </form>
  );
};
