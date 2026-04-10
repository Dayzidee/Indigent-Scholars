import { SponsorHelp } from '@/components/dashboard/sponsor/SponsorHelp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Center | Indigent-Scholars Sponsor Dashboard',
  description: 'Support, guides, and FAQs for our elite sponsor community.',
}

export default function HelpPage() {
  return <SponsorHelp />
}
