import {AuthModals} from "@/components/auth/modals";
import TitleHeader from "@/components/headers/title-header";
import React from "react";

const DashboardPage = () => {
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

      <AuthModals />
    </main>
  );
};

export default DashboardPage;
