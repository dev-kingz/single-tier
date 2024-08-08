"use client";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {LoginForm, SignupForm} from "@/components/forms";
import {cn} from "@/lib/utils";
import {useMediaQuery} from "@/hooks";

interface ModalProps extends React.HTMLAttributes<HTMLButtonElement> {
  defaultAction?: "signup" | "login";
  triggerStyles?: string;
}

export const AuthModal = ({defaultAction = "signup", triggerStyles, ...props}: ModalProps) => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState(defaultAction);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const actionText = action === "signup" ? "Sign Up" : "Login";

  const TriggerButton = (
    <Button variant="primary" className={cn("Trigger rounded-full", triggerStyles)} {...props}>
      {actionText}
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog key={defaultAction} open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{TriggerButton}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="hidden">
            <DialogTitle>{actionText}</DialogTitle>
          </DialogHeader>
          <div className="flexi w-full flex-col gap-y-4">
            {action === "signup" ? (
              <>
                <SignupForm open={open} setOpen={setOpen} setAction={setAction} />
                <div className="AlreadyHaveAnAccount flexi w-full gap-x-2 text-center">
                  <p className="ppl">Already have an account?</p>
                  <Button
                    variant="link"
                    className="AlreadyHaveAnAccountButton ppl"
                    onClick={() => setAction("login")}
                    {...props}
                  >
                    Login
                  </Button>
                </div>
              </>
            ) : (
              <>
                <LoginForm open={open} setOpen={setOpen} />
                <div className="DontHaveAnAccount flexi w-full gap-x-2 text-center">
                  <p className="ppl">Don&apos;t have an account?</p>
                  <Button
                    variant="link"
                    className="DontHaveAnAccountButton ppl"
                    onClick={() => setAction("signup")}
                  >
                    Sign up
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer key={defaultAction} open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{TriggerButton}</DrawerTrigger>
      <DrawerContent className="flexi flex-col justify-start">
        <DrawerHeader className="hidden">
          <DrawerTitle>{actionText}</DrawerTitle>
        </DrawerHeader>
        <div className="flexi w-full flex-col gap-y-4 px-10 py-6">
          {action === "signup" ? (
            <>
              <SignupForm open={open} setOpen={setOpen} setAction={setAction} />
              <div className="AlreadyHaveAnAccount flexi w-full gap-x-2 text-center">
                <p>Already have an account?</p>
                <Button
                  variant="link"
                  className="DontHaveAnAccountButton ppl"
                  onClick={() => setAction("login")}
                >
                  Login
                </Button>
              </div>
            </>
          ) : (
            <>
              <LoginForm open={open} setOpen={setOpen} />
              <div className="DontHaveAnAccount flexi w-full gap-x-2 text-center">
                <p>Don&apos;t have an account?</p>
                <Button
                  variant="link"
                  className="DontHaveAnAccountButton ppl"
                  onClick={() => setAction("signup")}
                >
                  Sign up
                </Button>
              </div>
            </>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
