import React from "react";
import MainSection from "@/app/_components/footer/main-section";
import LastSection from "@/app/_components/footer/last-section";

const Footer = () => {
  return (
    <footer className="Footer sticky w-full">
      <MainSection />
      <LastSection />
    </footer>
  );
};

export default Footer;
