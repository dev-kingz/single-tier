import TitleHeader from "@/components/headers/title-header";
import React from "react";

const ContactUsPage = () => {
  return (
    <main>
      <TitleHeader
        title="Contact Us"
        subTitle="Get in touch with us!"
        showBreadcrumb
        breadcrumbList={[
          {label: "Home", href: "/"},
          {label: "Contact Us", currentPage: true},
        ]}
      />
    </main>
  );
};

export default ContactUsPage;
