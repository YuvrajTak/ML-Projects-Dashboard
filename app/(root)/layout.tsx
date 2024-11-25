import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";



import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ml Ops",
  description: "A Next.js 14 ML Ops application",
};
     
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

      <html lang='en'>
        <body className={inter.className}>
          <Topbar />

          <main className='flex flex-row'>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full'>{children}</div>
            </section>
            {/* @ts-ignore */}
            {/* <RightSidebar /> */}
          </main>

          <Bottombar />
        </body>
      </html>

  );
}
