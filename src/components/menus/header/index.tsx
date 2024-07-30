import React from "react";
import {cn} from "@/lib/utils";
import HamburgerSidebar from "@/components/menus/header/hamburger-sidebar";

export interface HeaderProps {
  children?: React.ReactNode;
  type?: "sticky" | "fixed" | "static";
  className?: string;
}

const Header = ({children, className, type = "sticky"}: HeaderProps) => {
  return (
    <header
      className={cn(
        [
          "Header w-full",
          "bg-background text-foreground",
          type === "sticky" && "sticky top-0 z-50",
          type === "fixed" &&
            "fixed top-0 z-50 bg-transparent text-white dark:bg-transparent dark:text-white",
          type === "static" && "static",
        ],
        className,
      )}
    >
      {children}
      <HamburgerSidebar />
    </header>
  );
};

export default Header;
