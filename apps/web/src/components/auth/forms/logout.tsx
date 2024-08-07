import React from "react";
import {Logout} from "@/actions";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface LogoutProps {
  triggerStyles?: string;
}

export const LogoutForm = ({triggerStyles}: LogoutProps) => {
  async function handleLogout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await Logout();
  }

  return (
    <form onSubmit={handleLogout}>
      <Button type="submit" variant="primary" className={cn("Trigger", triggerStyles)}>
        Logout
      </Button>
    </form>
  );
};
