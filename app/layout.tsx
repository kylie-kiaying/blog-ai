import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const openSans= Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Write Wizard",
  description: "Blog buit with Next.js thaat uses AI to generate content",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        <Footer />
        {children}
      </body>
    </html>
  );
}
