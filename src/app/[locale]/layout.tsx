import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Dat Nguyen",
  description: "Blog",
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={params?.locale} suppressHydrationWarning={false} className="dark">
      <body
        className={cn(inter.className)}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
