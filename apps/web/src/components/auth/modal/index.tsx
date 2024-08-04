"use client";
import {useState} from "react";
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
import {useMediaQuery} from "@/hooks";

interface AuthModalProps {
  triggerStyles?: string;
  authAction: "login" | "signup" | "logout";
}

export function AuthModal({triggerStyles, authAction}: AuthModalProps) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (authAction === "logout") {
    return (
      <Button variant="primary" className={cn("Trigger", triggerStyles)}>
        Logout
      </Button>
    );
  }

  const isLogin = authAction === "login";
  const actionText = isLogin ? "Login" : "Sign Up";
  const descriptionText = isLogin
    ? "Welcome back! Please login to continue."
    : "Create an account to get started.";

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="primary" className={cn("Trigger", triggerStyles)}>
            {actionText}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{actionText}</DialogTitle>
            <DialogDescription>{descriptionText}</DialogDescription>
          </DialogHeader>
          {isLogin ? <LoginForm /> : <SignupForm />}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="primary" className={cn("Trigger", triggerStyles)}>
          {actionText}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flexi h-[80vh] flex-col justify-start">
        <DrawerHeader>
          <DrawerTitle>{actionText}</DrawerTitle>
          <DrawerDescription>{descriptionText}</DrawerDescription>
        </DrawerHeader>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </DrawerContent>
    </Drawer>
  );
}
