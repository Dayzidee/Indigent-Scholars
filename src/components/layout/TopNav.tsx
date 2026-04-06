'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function TopNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Verified Students', href: '/students' },
    { label: 'For Sponsors', href: '/sponsors' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-on-primary font-bold">
            IS
          </div>
          <div className="text-xl font-bold tracking-tighter text-primary whitespace-nowrap">
            Indigent Scholars
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((item) => (
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
          <div className="hidden sm:flex items-center space-x-4">
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

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-manrope tracking-tight text-lg font-semibold transition-colors ${
                    (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)))
                      ? 'text-primary'
                      : 'text-neutral-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-neutral-100" />
              <div className="flex flex-col space-y-4">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full text-left font-manrope tracking-tight text-lg font-semibold text-neutral-600">
                    Log In
                  </button>
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-primary text-on-primary px-5 py-3 rounded-lg font-manrope tracking-tight text-lg font-semibold shadow-sm">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
