import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/providers/ModalProvider";
import { GoldenAfricaGlobe } from "@/components/ui/GoldenAfricaGlobe";
// ─── Design system fonts ─────────────────────────────────────
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
      className={`${plusJakarta.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
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
          {/* Global Golden 3D Background */}
          <GoldenAfricaGlobe />
        </ModalProvider>
      </body>
    </html>
  );
}
