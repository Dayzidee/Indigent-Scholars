'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function TopNav() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-surface/80 shadow-sm border-b border-outline-variant/10"
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/">
          <div className="text-xl font-bold tracking-tighter text-primary">
            Indigent-Sc
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Verified Students', href: '/students' },
            { label: 'For Sponsors', href: '/sponsors' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-manrope tracking-tight text-sm font-semibold transition-colors ${
                 (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)))
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-neutral-600 hover:text-primary border-b-2 border-transparent'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <button className="font-manrope tracking-tight text-sm font-semibold text-neutral-600 scale-95 duration-150 active:opacity-80">
              Log In
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-primary text-on-primary px-5 py-2 rounded-lg font-manrope tracking-tight text-sm font-semibold scale-95 duration-150 active:opacity-80 shadow-sm hover:shadow-md">
              Register
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
