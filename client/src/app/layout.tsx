import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { NextAuthProvider } from "@/context/NextAuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Document",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <EdgeStoreProvider>
          <NextAuthProvider>
            {children}
          </NextAuthProvider>
          <Toaster />

        </EdgeStoreProvider>

      </body>
    </html>
  );
}
