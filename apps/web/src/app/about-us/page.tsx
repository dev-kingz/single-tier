import TitleHeader from "@/components/headers/title-header";
import React from "react";

const AboutUsPage = () => {
  return (
    <main>
      <TitleHeader
        title="About Us"
        subTitle="Get to know us!"
        showBreadcrumb
        breadcrumbList={[
          {label: "Home", href: "/"},
          {label: "About Us", currentPage: true},
        ]}
      />
    </main>
  );
};

export default AboutUsPage;
