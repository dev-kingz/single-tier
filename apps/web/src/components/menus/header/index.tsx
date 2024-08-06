"use client";
import React, {useState} from "react";
import {cn} from "@/lib/utils";
import HamburgerSidebar from "@/components/menus/header/hamburger-sidebar";
import {Sheet} from "@/components/ui/sheet";
import {BaseProps} from "@/types/theme";
import {Separator} from "@/components/ui/separator";

export interface HeaderProps extends BaseProps {
  type?: "sticky" | "fixed" | "static";
}

const Header = ({children, className, type = "sticky"}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <header
      className={cn(
        [
          "Header z-50 w-full",
          "bg-background text-foreground drop-shadow-md",
          type === "sticky" && "sticky top-0",
          type === "fixed" && "fixed top-0",
          type === "static" && "static",
        ],
        className,
      )}
    >
      <Sheet key={"HamburgerMenu"} open={isOpen} onOpenChange={setIsOpen}>
        {children}
        <Separator />
        <HamburgerSidebar handleClose={handleClose} />
      </Sheet>
    </header>
  );
};

export default Header;
