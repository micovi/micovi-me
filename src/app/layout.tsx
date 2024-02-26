import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

import "./globals.css";

const antaFont = localFont({
  src: "./fonts/Anta-Regular.ttf",
  display: "swap",
  variable: "--font-anta",
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "micovi.me",
  description: "Personal website and blog of Ovidiu Miclea (micovi)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
          antaFont.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
