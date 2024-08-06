import React from "react";
import TitleHeader from "@/components/headers/title-header";
import {auth} from "@/auth";
import {LogoutForm} from "@/components/auth/forms";

const DashboardPage = async () => {
  const session = await auth();

  if (!session?.user) {
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
          {/* <LoginModal triggerStyles="w-full" />
          <SignupModal triggerStyles="w-full" /> */}
        </div>
      </main>
    );
  }

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
      <div className="flexi w-full max-w-lg flex-col gap-y-5 px-5">
        <p>{session?.user.name}</p>
        <p>{session?.user.email}</p>
        <LogoutForm />
      </div>
    </main>
  );
};

export default DashboardPage;
