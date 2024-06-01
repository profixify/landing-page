import Navbar from "@/core/layouts/Navbar";
import { ThemeProvider } from "@/core/theme";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-slate-950 bg-slate-100">
        <ThemeProvider attribute="class" enableSystem>
          <Navbar />
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
