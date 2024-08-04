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
import {LoginForm, SignupForm} from "../forms";
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
            {authAction=== "login"? <LoginForm /> : <SignupForm />}
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
        <DrawerContent className="h-[80vh] flexi flex-col justify-start">
          <DrawerHeader>
            <DrawerTitle>{authAction === "login" ? "Login" : "Sign Up"}</DrawerTitle>
            <DrawerDescription>
              {authAction === "login"
                ? "Welcome back! Please login to continue."
                : "Create an account to get started."}
            </DrawerDescription>
          </DrawerHeader>
          {authAction=== "login"? <LoginForm /> : <SignupForm />}
        </DrawerContent>
      </Drawer>
    );
  } else if (authAction === "logout") {
    return <Button variant="primary" className={cn("Trigger", triggerStyles)}>Logout</Button>;
  }
}
