import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeaderComp } from "@/components/Headers";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klabat Dev - Professional Digital Solutions",
  description: "Professional Digital Marketing dan Pengembangan Aplikasi. Kami membantu pembuatan aplikasi mobile, website, AI assistant, dan desain kreatif untuk bisnis Anda.",
  keywords: ["software house", "web development", "mobile apps", "digital marketing", "AI assistant", "UI/UX design"],
  authors: [{ name: "Klabat Dev" }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderComp />
        <main className="pt-[80px] min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
