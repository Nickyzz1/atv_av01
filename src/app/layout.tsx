import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased`}>

          <Menu op1="home" op2="imc" op3="média"/>
          
        {children}
        <Footer op1="Nos contate:" op2="4199999"/>
      </body>
    </html>
  );
}
