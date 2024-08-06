import React from "react";
import {cn} from "@/lib/utils";
import {HeaderProps} from "@/components/menus/header";
import BrandIdentity from "@/components/brand/brand-identity";
import LastCol from "./last-col";
import NavMenu from "./nav-menu";

const MainSection = ({className, type = "sticky"}: HeaderProps) => {
  return (
    <section
      className={cn(
        [
          "MainSection",
          "flexib w-full p-2 sm:p-3 max-w-7xl mx-auto",
          type === "sticky" && "sticky top-0 z-50",
          type === "fixed" &&
            "fixed top-0 z-50 bg-transparent text-white drop-shadow-none dark:bg-transparent dark:text-white",
          type === "static" && "static",
        ],
        className,
      )}
    >
      <BrandIdentity />
      <NavMenu />
      <LastCol />
    </section>
  );
};

export default MainSection;
