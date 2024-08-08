// app/template.tsx
import React from "react";

export default function Template({children}: {children: React.ReactNode}) {
  return <main className="animate-slide-in">{children}</main>;
}
