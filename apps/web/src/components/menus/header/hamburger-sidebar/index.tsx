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
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface HamburgerSidebarProps {
  handleClose: () => void;
}

const HamburgerSidebar = ({handleClose}: HamburgerSidebarProps) => {
  return (
    <aside>
      <SheetContent className="flexib flex-col sm:hidden">
        <Button onClick={handleClose} variant={"link"}>
          <GiCrossedBones className="text-foreground absolute right-[14px] top-[13px] z-10 h-5 w-5 cursor-pointer" />
        </Button>
        <SheetHeader>
          <SheetTitle>DevKingz</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetDescription>
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
