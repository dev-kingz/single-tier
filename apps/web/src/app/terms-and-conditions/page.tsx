import TitleHeader from "@/components/headers/title-header";
import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <main>
      <TitleHeader
        title="Terms and Conditions"
        subTitle="Our terms and conditions!"
        showBreadcrumb
        breadcrumbList={[
          {label: "Home", href: "/"},
          {label: "Terms and Conditions", currentPage: true},
        ]}
      />
    </main>
  );
};

export default TermsAndConditionsPage;
