"use client";
import * as React from "react";
import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {LoginForm} from "../forms";
import {cn} from "@/lib/utils";
import { useMediaQuery } from "@/hooks";

interface AuthModalProps {
  triggerStyles?: string;
  authAction: "login" | "signup" | "logout";
}

export function AuthModal({triggerStyles, authAction}: AuthModalProps) {
  if (authAction === "login" || authAction === "signup") {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="primary" className={cn("Trigger", triggerStyles)}>
              {authAction === "login" ? "Login" : "Sign Up"}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{authAction === "login" ? "Login" : "Sign Up"}</DialogTitle>
              <DialogDescription>
                {authAction === "login"
                  ? "Welcome back! Please login to continue."
                  : "Create an account to get started."}
              </DialogDescription>
            </DialogHeader>
            <LoginForm />
          </DialogContent>
        </Dialog>
      );
    }

    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="primary" className={cn("Trigger", triggerStyles)}>
            {authAction === "login" ? "Login" : "Sign Up"}
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[70vh] flexi flex-col justify-start">
          <DrawerHeader className="text-left">
            <DrawerTitle>{authAction === "login" ? "Login" : "Sign Up"}</DrawerTitle>
            <DrawerDescription>
              {authAction === "login"
                ? "Welcome back! Please login to continue."
                : "Create an account to get started."}
            </DrawerDescription>
          </DrawerHeader>
          <LoginForm className="px-4" />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant={"primary"}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  } else if (authAction === "logout") {
    return <Button variant="primary" className={cn("Trigger", triggerStyles)}>Logout</Button>;
  }
}
