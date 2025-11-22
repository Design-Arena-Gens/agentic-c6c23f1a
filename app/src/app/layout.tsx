import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Civic Identity Platform",
  description:
    "End-to-end architecture for a national digital identity platform across mobile, web, and kiosk channels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#14213d_0%,_#0f172a_55%,_#020617_100%)]">
          <TopNav />
          <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-24 sm:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
