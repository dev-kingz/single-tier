import "./globals.css";
import type {Metadata} from "next";
import Providers from "@/app/providers";
import {Auth} from "@/lib/auth";

import {Cinzel, Poppins} from "next/font/google";
import Header from "@/app/_components/header";
import MainSection from "@/app/_components/header/main-section";
import Footer from "@/app/_components/footer";
import {Brand} from "@/constants/brand";
import {Toaster} from "@/components/ui/toaster";

const primary = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-primary",
});

const secondary = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-secondary",
});

const metadata: Metadata = {
  metadataBase: new URL(Brand.url),
  title: {
    default: `${Brand.name} - ${Brand.slogan}`,
    template: `%s - ${Brand.name}`,
  },
  description: Brand.description,
  applicationName: Brand.name,
  alternates: {
    languages: {
      "en-US": Brand.url,
    },
    media: {
      "only screen and (max-width: 640px)": Brand.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Brand.url,
    title: `${Brand.name} - ${Brand.slogan}`,
    description: Brand.description,
    images: [
      {
        url: Brand.preview,
        width: 1200,
        height: 630,
        alt: `${Brand.name} - ${Brand.slogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${Brand.name} - ${Brand.slogan}`,
    images: Brand.preview,
    description: Brand.description,
  },
};

export default async function RootLayout({
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
          <Auth />
          <Header>
            <MainSection />
          </Header>
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
