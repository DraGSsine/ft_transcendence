import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sideBar";
import NavBar from "@/components/NavBar";
import ContextProvider from "@/providers/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} bg-hero bg-cover flex`}>
        <ContextProvider>
          <>
            <span className=" -z-10 absolute inset-0 bg-black opacity-60"></span>
            <SideBar />
            <div className="px-20 w-full">
              <NavBar />
              {children}
            </div>
          </>
        </ContextProvider>
      </body>
    </html>
  );
}
