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
      <div className="flexi w-full max-w-lg gap-x-5 px-5">
        <AuthModal authAction={"login"} triggerStyles="w-full" />
        <AuthModal authAction={"signup"} triggerStyles="w-full" />
      </div>
    </main>
  );
};

export default DashboardPage;
