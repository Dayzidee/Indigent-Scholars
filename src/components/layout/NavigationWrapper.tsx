'use client'

import { usePathname } from "next/navigation";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { GoldenAfricaGlobe } from "@/components/ui/GoldenAfricaGlobe";

export function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith('/dashboard')

  return (
    <>
      {!isDashboard && <TopNav />}
      <main className="flex-1">
        {children}
      </main>
      {!isDashboard && <Footer />}
      {!isDashboard && <GoldenAfricaGlobe />}
    </>
  )
}
