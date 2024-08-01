// app/template.tsx
import React from "react";

export default function Template({children}: {children: React.ReactNode}) {
  return <div className="flexi h-full w-full animate-slide-in flex-col">{children}</div>;
}
