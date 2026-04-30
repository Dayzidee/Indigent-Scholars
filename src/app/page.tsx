import { RedesignedHero } from '@/components/home/RedesignedHero';
import { ImpactTypography } from '@/components/home/ImpactTypography';
import { AboutSection } from '@/components/home/AboutSection';
import { VerifiedScholars } from '@/components/home/VerifiedScholars';
import { ProcessSection } from '@/components/home/ProcessSection';
import { TransparencySection } from '@/components/home/TransparencySection';
import { PartnersSection } from '@/components/home/PartnersSection';
import { ContactSection } from '@/components/home/ContactSection';
import { QuickApplySection } from '@/components/home/QuickApplySection';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* 1. Redesigned Hero Section */}
      <RedesignedHero />

      {/* 2. Impact Typography Block */}
      <ImpactTypography />

      {/* 3. About Us Section */}
      <AboutSection />

      {/* 4. Verified Scholars Bento Grid */}
      <VerifiedScholars />

      {/* 5. How It Works Section */}
      <ProcessSection />

      {/* 6. Radical Transparency Section */}
      <TransparencySection />

      {/* 7. Partnering Institutions */}
      <PartnersSection />

      {/* 8. Contact & Inquiry Section */}
      <ContactSection />

      {/* 9. Quick Apply Section (Interactive) */}
      <QuickApplySection />
    </main>
  );
}
