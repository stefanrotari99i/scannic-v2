import "./globals.css";

import Layout from "@/components/layout-wrapper";
import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "./providers";

const manrope = Manrope({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${manrope.className}  antialiased`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
