import TitleHeader from "@/components/headers/title-header";
import React from "react";
import Introduction from "./sections/introduction";
import Consent from "./sections/consent";
import InformationWeCollect from "./sections/information-we-collect";

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
      <Introduction/>
      <Consent/>
      <InformationWeCollect/>
    </main>
  );
};

export default PrivacyAndPolicyPage;
