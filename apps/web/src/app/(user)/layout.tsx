"use client";
import React, {useEffect} from "react";
import {selectUser} from "@/store/slices/user.slice";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable";
import Sidebar from "./dashboard/_components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const {status, user} = useSelector(selectUser);

  // useEffect(() => {
  //   if (status === "rejected") {
  //     router.push("/");
  //   }
  // }, [status, user, router]);

  if (status === "pending") {
    return (
      <main>
        <h2>Loading...</h2>
      </main>
    );
  }

  if (status === "rejected") {
    router.push("/");
  }

  if (status === "fulfilled" && user) {
    return (
      <main className="flex-col">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[200px] w-full rounded-lg border"
        >
          <ResizablePanel defaultSize={20}>
            <div className="flexi h-full p-6">
              <Sidebar />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80}>
            <div className="flexi h-full p-6">{children}</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    );
  }
}
