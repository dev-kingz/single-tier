import React from "react";
import QuickLinks from "@/components/menus/footer/main-section/quick-links";
import ContactUs from "@/components/menus/footer/main-section/contact-us";
import BrandDescription from "./brand-description";

const MainSection = () => {
  return (
    <section className="MainSection flexi bg-foreground text-background w-full">
      <div className="flexi-it mx-auto w-full max-w-7xl flex-col gap-4 px-8 py-4 sm:flex-row sm:px-2 sm:py-8">
        <BrandDescription />
        <QuickLinks />
        <ContactUs />
      </div>
    </section>
  );
};

export default MainSection;
