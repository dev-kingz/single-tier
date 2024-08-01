// app/template.tsx
import React from "react";

export default function Template({children}: {children: React.ReactNode}) {
  return <div className="flexi animate-slide-in h-full w-full flex-col">{children}</div>;
}
