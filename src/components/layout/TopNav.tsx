'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


export function TopNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Hide TopNav on dashboard routes
  if (pathname?.startsWith('/dashboard')) return null;

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
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            {"Indigent-Sc".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + index * 0.03,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                className="text-xl font-black bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-[length:200%_auto] text-transparent bg-clip-text inline-block hover:animate-shimmer"
              >
                {char}
              </motion.span>
            ))}

            {/* Subtle accent dot */}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="w-1.5 h-1.5 rounded-full bg-blue-600 ml-0.5 mt-2 shadow-[0_0_8px_rgba(37,99,235,0.6)]"
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-manrope tracking-tight text-sm font-semibold transition-colors ${(pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)))
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-zinc-400 hover:text-primary border-b-2 border-transparent'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-4">
            <Link href="/login">
              <button id="nav-login-desktop" className="font-manrope tracking-tight text-sm font-semibold text-zinc-300 scale-95 duration-150 active:opacity-80">
                Sign In
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
            className="md:hidden p-2 text-zinc-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <span className="material-symbols-outlined text-[24px]">close</span> : <span className="material-symbols-outlined text-[24px]">menu</span>}

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
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-manrope tracking-tight text-lg font-semibold transition-colors ${(pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)))
                      ? 'text-primary'
                      : 'text-zinc-400'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-zinc-800" />
              <div className="flex flex-col space-y-4">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <button id="nav-login-mobile" className="w-full text-left font-manrope tracking-tight text-lg font-semibold text-zinc-300">
                    Sign In
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
