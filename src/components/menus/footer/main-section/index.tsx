import React from "react";
import QuickLinks from "@/components/menus/footer/main-section/quick-links";
import ContactUs from "@/components/menus/footer/main-section/contact-us";
import BrandDescription from "./brand-description";

const MainSection = () => {
  return (
    <section className="MainSection flexi w-full flex-col gap-4 bg-foreground px-8 text-background sm:flex-row sm:px-2">
      <BrandDescription />
      <QuickLinks />
      <ContactUs />
    </section>
  );
};

export default MainSection;
