import React from "react";
import {ThemeToggle} from "@/components/theme/toggle";
import {cn} from "@/lib/utils";
import {HeaderProps} from "@/components/menus/header";
import BrandIdentity from "@/components/menus/header/main-section/brand-identity";

const MainSection = ({className, type = "sticky"}: HeaderProps) => {
  return (
    <section
      className={cn(
        [
          "MainSection flexib w-full p-4 sm:p-5",
          "from-primary-400 to-primary-600 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] text-foreground",
          type === "sticky" && "sticky top-0 z-50",
          type === "fixed" &&
            "fixed top-0 z-50 bg-transparent text-white dark:bg-transparent dark:text-white",
          type === "static" && "static",
        ],
        className,
      )}
    >
      <BrandIdentity />
      <ThemeToggle rounded={"full"} />
    </section>
  );
};

export default MainSection;
