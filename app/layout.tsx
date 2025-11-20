import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ascend - Every Second Counts | Medical Drone Delivery",
  description: "Ascend delivers life-saving medical supplies via drone in minutes. Emergency blood delivery, vaccines, and critical medicines to remote communities. Every second counts.",
  keywords: ["medical drone delivery", "emergency healthcare", "vaccine logistics", "remote healthcare", "drone technology", "medical supplies"],
  authors: [{ name: "Ascend" }],
  openGraph: {
    title: "Ascend - Every Second Counts",
    description: "Delivering life-saving medical supplies in minutes, not hours",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
