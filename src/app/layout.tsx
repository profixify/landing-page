import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/core/layouts/Navbar";

export const metadata: Metadata = {
  title: "Profixify",
  description: "Repair Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white w-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
