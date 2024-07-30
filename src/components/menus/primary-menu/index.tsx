import {cn} from "@/lib/utils";
import React from "react";

interface PrimaryMenuProps {
  type?: "sticky" | "fixed" | "static";
  className?: string;
}

const PrimaryMenu = ({className, type = "sticky"}: PrimaryMenuProps) => {
  return (
    <header
      className={cn(
        [
          "PrimaryMenu w-full bg-background p-4 text-foreground sm:p-6",
          type === "sticky" && "sticky top-0 z-50",
          type === "fixed" &&
            "fixed top-0 z-50 bg-transparent text-white dark:bg-transparent dark:text-white",
          type === "static" && "static",
        ],
        className,
      )}
    >
      PrimaryMenu
    </header>
  );
};

export default PrimaryMenu;
