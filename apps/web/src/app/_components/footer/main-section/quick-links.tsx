import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import Link from "next/link";
import React from "react";

const QuickLinks = ({className}: BaseProps) => {
  return (
    <section className={cn("QuickLinks", "flexi w-full flex-col gap-4 sm:items-start", className)}>
      <h4>Quick Links</h4>
      <div className="Links flexi w-full flex-col sm:items-start">
        <Button variant={"link"} className="text-background px-0">
          <Link href="/about-us">
            <p>About Us </p>
          </Link>
        </Button>
        <Button variant={"link"} className="text-background px-0">
          <Link href="/contact-us">
            <p>Contact Us</p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default QuickLinks;
