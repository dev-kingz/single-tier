import "./globals.css";
import type {Metadata} from "next";
import Providers from "@/app/providers";

import {Cinzel, Poppins} from "next/font/google";
import Header from "@/components/menus/header";
import MainSection from "@/components/menus/header/main-section";
import Footer from "@/components/menus/footer";
import { Brand } from "@/constants/brand";

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
  title: Brand.name,
  description: Brand.slogan,
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
      <body suppressHydrationWarning>
        <Providers>
          <Header>
            <MainSection />
          </Header>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
