import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import React from "react";

const QuickLinks = ({className}: BaseProps) => {
  return (
    <section
      className={cn("QuickLinks", "flexi w-full flex-col sm:flex-row sm:justify-start", className)}
    >
      <h4>Quick Links</h4>
    </section>
  );
};

export default QuickLinks;
