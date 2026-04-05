import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/providers/ModalProvider";
import { SceneLoader } from "@/components/canvas/SceneLoader";

// ─── Design system fonts ─────────────────────────────────────
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// ─── Metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Indigent-Scholars — Illumination of Potential",
  description:
    "Nigeria's most prestigious academic support ecosystem. Connecting verified scholars with sponsors.",
};

import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";

// ─── Root Layout ─────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        {/* Material Symbols for Stitch's icon system */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-surface text-on-surface selection:bg-secondary-container">
        <ModalProvider>
          <TopNav />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          {/* 3D background — fixed, behind all content, SSR-safe */}
          <SceneLoader />
        </ModalProvider>
      </body>
    </html>
  );
}
