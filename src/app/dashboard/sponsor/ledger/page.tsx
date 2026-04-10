'use client'

import { SponsorLedger } from '@/components/dashboard/sponsor/SponsorLedger'
import { Suspense } from 'react'

export default function LedgerPage() {
  return (
    <Suspense fallback={<div>Loading Ledger...</div>}>
      <SponsorLedger />
    </Suspense>
  )
}
