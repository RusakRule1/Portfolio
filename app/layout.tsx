import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { SITE_CONFIG } from "@/lib/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Portfolio`,
  description: `Personal portfolio of ${SITE_CONFIG.name} — ${SITE_CONFIG.role}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} light`} suppressHydrationWarning>
      <body className="bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-white antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
