"use client";
import React from "react";
import AuthModal from "@/components/auth/modals";
import {CiUser} from "react-icons/ci";
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {LogOut, User} from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const ProfileActions = () => {
  const session = useSession();
  const status = session?.status;
  const user = session?.data?.user;
  console.log(user);

  if (!user && status !== "loading") {
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
  }

  return (
    <div className="ProfileActions flexi border-accent gap-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" rounded="full" className="p-2">
            <CiUser className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            <p className="ppl text-xs">
              signed in as:
              <br /> {user?.email}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut()}>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileActions;
