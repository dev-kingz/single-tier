import React from "react";
import {Button} from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { GiCrossedBones } from "react-icons/gi";

interface HamburgerSidebarProps {
  handleClose: () => void;
}

const HamburgerSidebar = ({handleClose}: HamburgerSidebarProps) => {
  return (
    <aside>
      <SheetContent className="flexi flex-col sm:hidden">
        <Button onClick={handleClose} variant={"link"}>
          <GiCrossedBones className="absolute right-[14px] top-[13px] z-10 h-5 w-5 cursor-pointer text-white" />
        </Button>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4"></div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </aside>
  );
};

export default HamburgerSidebar;
