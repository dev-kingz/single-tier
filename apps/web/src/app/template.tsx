// app/template.tsx
import React from "react";

export default function Template({children}: {children: React.ReactNode}) {
  return <div className="flexit animate-slide-in min-h-[70vh] w-full flex-col">{children}</div>;
}
