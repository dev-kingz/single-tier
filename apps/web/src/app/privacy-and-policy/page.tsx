import TitleHeader from "@/components/headers/title-header";
import React from "react";

const PrivacyAndPolicyPage = () => {
  return (
    <main>
      <TitleHeader
        title="Privacy and Policy"
        subTitle="Our privacy and policy!"
        showBreadcrumb
        breadcrumbList={[
          {label: "Home", href: "/"},
          {label: "Privacy and Policy", currentPage: true},
        ]}
      />
    </main>
  );
};

export default PrivacyAndPolicyPage;
