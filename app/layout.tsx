import type { Metadata } from "next";
import { funnelDisplay, beVietnamPro } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AccruLabs — Building Defensible Data Ecosystems",
  description:
    "AccruLabs is a CA firm specialising in DPDP compliance, privacy engineering, and data governance for Indian businesses.",
  keywords: [
    "DPDP compliance",
    "India data protection",
    "privacy engineering",
    "data governance",
    "CA firm",
    "DPDP Act 2023",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${funnelDisplay.variable} ${beVietnamPro.variable}`}>
      <body className="antialiased bg-bg-deep text-white font-body">
        {children}
      </body>
    </html>
  );
}
