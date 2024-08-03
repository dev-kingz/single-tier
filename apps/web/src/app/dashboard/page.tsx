import TitleHeader from "@/components/headers/title-header";
import React from "react";

const DashboardPage = () => {
  return (
    <main>
      <TitleHeader
        title="Dashboard"
        subTitle="Your personal dashboard!"
        showBreadcrumb
        breadcrumbList={[
          {label: "Home", href: "/"},
          {label: "Dashboard", currentPage: true},
        ]}
      />
    </main>
  );
};

export default DashboardPage;
