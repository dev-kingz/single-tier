import React from "react";
import QuickLinks from "@/app/_components/footer/main-section/quick-links";
import ContactUs from "@/app/_components/footer/main-section/contact-us";
import BrandDescription from "./brand-description";

const MainSection = () => {
  return (
    <section className="MainSection flexi bg-foreground text-background h-full min-h-72 w-full">
      <div className="flexi-it mx-auto w-full max-w-7xl flex-col gap-4 px-8 py-8 sm:flex-row">
        <BrandDescription />
        <QuickLinks />
        <ContactUs />
      </div>
    </section>
  );
};

export default MainSection;
