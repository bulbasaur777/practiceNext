import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./ui/navbar";

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
      <body className={inter.className}>
        <div className="flex justify-center items-center w-full h-12 bg-darkkhaki">
          <Navbar />
          {/* <nav>
            <Link className="mr-2 underline" href="/">
              Главная
            </Link>
            <Link className="underline" href="/list">
              Список
            </Link>
          </nav> */}
        </div>
        {children}
      </body>
    </html>
  );
}
