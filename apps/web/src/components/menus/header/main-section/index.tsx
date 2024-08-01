import React from "react";
import {ThemeToggle} from "@/components/theme/toggle";
import {cn} from "@/lib/utils";
import {HeaderProps} from "@/components/menus/header";
import {SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {RxHamburgerMenu} from "react-icons/rx";
import BrandIdentity from "@/components/brand/brand-identity";

const MainSection = ({className, type = "sticky"}: HeaderProps) => {
  return (
    <section
      className={cn(
        [
          "MainSection",
          "flexib w-full p-2 sm:p-3", // Adjut the Layout here
          "bg-background text-foreground drop-shadow-md", // Adjust the colors here
          type === "sticky" && "sticky top-0 z-50",
          type === "fixed" &&
            "fixed top-0 z-50 bg-transparent text-white drop-shadow-none dark:bg-transparent dark:text-white",
          type === "static" && "static",
        ],
        className,
      )}
    >
      <BrandIdentity />
      <div className="flexi">
        <ThemeToggle rounded={"full"} />
        <SheetTrigger asChild className="flex sm:hidden">
          <Button variant="link">
            <RxHamburgerMenu className="text-foreground h-6 w-6 stroke-1" />
          </Button>
        </SheetTrigger>
      </div>
    </section>
  );
};

export default MainSection;
