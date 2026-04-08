'use client'

import Image from 'next/image'
import { useState } from 'react'

export function SponsorTopNavBar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <header className="fixed top-0 right-0 z-40 flex items-center justify-between h-16 w-full lg:w-[calc(100%-16rem)] px-6 lg:px-8 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl shadow-sm dark:shadow-none border-b border-outline-variant/10">
      {/* Search Bar */}
      <div className="flex-1 flex items-center max-w-md">
        <div className="relative w-full group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-lg group-focus-within:text-primary transition-colors">
            search
          </span>
          <input 
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search scholars, transactions..."
            className="w-full bg-surface-container-low border-none rounded-xl py-2 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all font-body"
          />
        </div>
      </div>

      {/* Actions & Profile */}
      <div className="flex items-center gap-4 lg:gap-6 ml-4">
        <button className="hidden sm:block text-sm font-bold text-neutral-600 hover:text-primary transition-colors font-headline">
          Support
        </button>
        
        <div className="relative cursor-pointer group p-2 hover:bg-surface-container-low rounded-full transition-all">
          <span className="material-symbols-outlined text-neutral-600 group-hover:text-primary transition-colors">
            notifications
          </span>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error rounded-full border-2 border-white dark:border-neutral-950"></span>
        </div>

        <div className="flex items-center gap-3 border-l pl-4 lg:pl-6 border-outline-variant/30">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-surface-container-highest">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxXXOlz1aZn1N_8abHvpyZPDz_SAksOOgs5IpvRYE9cOEWETfsnUPDMVI-cc0YZOBh_EcYfwDr7J_m5MLKRNKLDg6nM6kpxgRtnTn708t1zGTREYa1rLtHlxf35dGOKCujwip1frQF4rB7ehyash_nEvFjeMWQcSyaC2V4id0uHrFrW0bTIZYpJlcTpDaKbUk6p8CsLFxJXnbrOUyA1ZPUAOHzTKeNZeyc7Uy-suTJqdLRiRlksvu7YQjcN-k4XI4aazw9Msp29YkG"
              alt="Indigent-Sc"
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <span className="text-sm font-extrabold font-headline text-on-background block leading-none">Indigent-Sc</span>
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Enterprise</span>
          </div>
        </div>
      </div>
    </header>
  )
}
