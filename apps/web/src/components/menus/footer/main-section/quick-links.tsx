import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import Link from "next/link";
import React from "react";

const QuickLinks = ({className}: BaseProps) => {
  return (
    <section className={cn("QuickLinks", "flexi w-full flex-col gap-4 sm:items-start", className)}>
      <h4>Quick Links</h4>
      <div className="Links flexi-it w-full flex-col">
        <Button variant={"link"} className="text-background">
          <Link href="/about">
            <h6>About Us </h6>
          </Link>
        </Button>
        <Button variant={"link"} className="text-background">
          <Link href="/contact">
            <h6>Contact Us</h6>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default QuickLinks;
