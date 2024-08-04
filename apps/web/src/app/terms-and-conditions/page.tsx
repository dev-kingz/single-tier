import React from 'react'
import TitleHeader from "@/components/headers/title-header";
import Introduction from "./sections/introduction";

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
      <Introduction/>
    </main>
  );
};

export default TermsAndConditionsPage;
