import React from "react";
import TitleHeader from "@/components/headers/title-header";

const DashboardPage = async () => {
  return (
    <main>
      <TitleHeader
        title="Dashboard"
        subTitle="Welcome to the dashboard!"
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
