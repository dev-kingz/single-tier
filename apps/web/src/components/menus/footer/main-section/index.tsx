import React from "react";
import QuickLinks from "@/components/menus/footer/main-section/quick-links";
import ContactUs from "@/components/menus/footer/main-section/contact-us";
import BrandDescription from "./brand-description";

const MainSection = () => {
  return (
    <section className="MainSection flexi bg-foreground text-background w-full flex-col gap-4 px-8 sm:flex-row sm:px-2">
      <BrandDescription />
      <QuickLinks />
      <ContactUs />
    </section>
  );
};

export default MainSection;
