import "./globals.css";
import type {Metadata} from "next";
import Providers from "@/app/providers";

import {Cinzel, Poppins} from "next/font/google";

const primary = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-primary",
});

const secondary = Cinzel({
  subsets: ["latin"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "DevKingz",
  description: "Turning Dreams into Reality!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${primary.variable} ${secondary.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
