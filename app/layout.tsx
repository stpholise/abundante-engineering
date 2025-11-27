import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import PrimaryHeader from "./_components/layout/PrimaryHeader";
import Footer from "./_components/layout/Footer";
import AosInitializer from "./_components/utils/AosInitializer";
import ToastProvider from "./_components/utils/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
})
export const metadata: Metadata = {
  title: "Abundant Engineering",
  description: "An engineering company focused on construction",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0a0a0a] min-h-screen min-w-full`}
      >
        <AosInitializer/>
        <ToastProvider />
        <PrimaryHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
