import React from "react";
import {SignOut} from "@/actions";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface LogoutProps {
  triggerStyles?: string;
}

const LogoutForm = ({triggerStyles}: LogoutProps) => {
  return (
    <form action={SignOut}>
      <Button type="submit" variant="primary" className={cn("Trigger", triggerStyles)}>
        Logout
      </Button>
    </form>
  );
};

export {LogoutForm};
