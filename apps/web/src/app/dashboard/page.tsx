import React from "react";
import {AuthModal} from "@/components/auth/modal";
import TitleHeader from "@/components/headers/title-header";

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

      <AuthModal authAction={"logout"} />
    </main>
  );
};

export default DashboardPage;
