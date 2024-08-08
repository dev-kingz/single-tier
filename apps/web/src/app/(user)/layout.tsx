"use client";
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

  if (loading) {
    return <div className="flexi min-h-[70vh] w-full flex-col">Loading...</div>;
  }

  if (!loading && !user) {
    if (!user) {
      router.push("/");
    }

    if (user) {
      return <div className="flexit min-h-[70vh] w-full flex-col">{children}</div>;
    }
  }
}
