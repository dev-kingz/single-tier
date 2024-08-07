import React from "react";
import {Logout} from "@/actions";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface LogoutProps {
  triggerStyles?: string;
}

export const LogoutForm = ({triggerStyles}: LogoutProps) => {
  return (
    <form action={Logout}>
      <Button type="submit" variant="primary" className={cn("Trigger", triggerStyles)}>
        Logout
      </Button>
    </form>
  );
};
