import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";
import React from "react";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Chivo({
  weight: ["100", "200", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "FlowIQ - Business Analytics",
  description: "FlowIQ - Business Analytics done the best way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
