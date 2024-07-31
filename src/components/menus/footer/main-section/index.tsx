import BrandIdentity from "@/components/brand/brand-identity";
import React from "react";

const MainSection = () => {
  return (
    <section className="MainSection flexi h-56 w-full bg-foreground text-background">
      <BrandIdentity className="flex-col sm:flex-row" inverted />
    </section>
  );
};

export default MainSection;
