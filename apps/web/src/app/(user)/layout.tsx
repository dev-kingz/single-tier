"use client";
import React, {useEffect} from "react";
import {selectUser} from "@/store/slices/user.slice";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const {user, loading} = useSelector(selectUser);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flexi min-h-[70vh] w-full flex-col">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <main>{children}</main>;
}
