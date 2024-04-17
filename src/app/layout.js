// import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { cn } from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextTopLoader />
        <Nav />
        {modal}
        {children}
        <Footer />
      </body>
    </html>
  );
}
