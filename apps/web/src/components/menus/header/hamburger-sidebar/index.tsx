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
import {GiCrossedBones} from "react-icons/gi";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {NavList} from "../constants";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {RiArrowRightWideFill} from "react-icons/ri";

interface HamburgerSidebarProps {
  handleClose: () => void;
}

const HamburgerSidebar = ({handleClose}: HamburgerSidebarProps) => {
  const navList = NavList;

  return (
    <aside>
      <SheetContent className="flexib flex-col sm:hidden">
        <Button onClick={handleClose} variant={"link"}>
          <GiCrossedBones className="text-foreground absolute right-[14px] top-[13px] z-10 h-5 w-5 cursor-pointer" />
        </Button>
        <SheetHeader>
          <SheetTitle>Welcome to DevKingz</SheetTitle>
        </SheetHeader>
        <SheetDescription className="w-full">
          <Accordion type="single" collapsible className="w-full">
            {navList.map((navItem) => (
              <AccordionItem key={navItem.href} value={navItem.href}>
                {navItem.children ? (
                  <div key={navItem.href}>
                    <AccordionTrigger className="py-3 font-bold">{navItem.title}</AccordionTrigger>
                    <AccordionContent className="flexi-it flex-col gap-y-3">
                      {navItem.children.map((child, index, childArray) => (
                        <div className="flexi-it w-full flex-col gap-y-3" key={child.href}>
                          <Link href={child.href} className="flexib w-full">
                            <p>{child.title}</p> <RiArrowRightWideFill />
                          </Link>
                          {index !== childArray.length - 1 && <Separator />}
                        </div>
                      ))}
                    </AccordionContent>
                  </div>
                ) : (
                  <AccordionHeader className="flex py-3">{navItem.title}</AccordionHeader>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </SheetDescription>
        <div className="grid gap-4 py-4"></div>
        <SheetFooter className="w-full">
          <SheetClose asChild>
            <Button variant={"primary"} rounded={"full"} className="w-full" type="submit">
              Sign up
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </aside>
  );
};

export default HamburgerSidebar;
