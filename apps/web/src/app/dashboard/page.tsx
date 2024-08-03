import TitleHeader from "@/components/headers/title-header";
import React from "react";

const DashboardPage = () => {
  return (
    <main>
      <TitleHeader
        title="Dashboard"
        showBreadcrumb
        breadcrumbList={[
          {label: "Home", href: "/"},
          {label: "Dashboard", href: "/dashboard"},
        ]}
      />
    </main>
  );
};

export default DashboardPage;
