import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import React from "react";

const ContactUs = ({className}: BaseProps) => {
  return (
    <section
      className={cn("ContactUs", "flexi w-full flex-col sm:flex-row sm:justify-start", className)}
    >
      <h4>Contact Us</h4>
    </section>
  );
};

export default ContactUs;
