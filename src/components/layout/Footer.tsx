import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#1C1B1B] w-full mt-20 relative z-10" id="footer">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-12 py-16 w-full max-w-7xl mx-auto">
        <div className="col-span-2 md:col-span-1">
          <div className="text-lg font-black text-white mb-6 uppercase tracking-widest">
            Indigent-Sc
          </div>
          <p className="text-neutral-400 text-xs leading-relaxed max-w-xs">
            A high-end editorial EdTech platform dedicated to empowering
            Nigerian scholars through transparent philanthropy.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-inter text-xs uppercase tracking-widest text-white font-bold">
            Resources
          </h5>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/news"
          >
            News
          </Link>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/events"
          >
            Events
          </Link>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/faq"
          >
            FAQ
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-inter text-xs uppercase tracking-widest text-white font-bold">
            Company
          </h5>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/careers"
          >
            Careers
          </Link>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/team"
          >
            Team
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-inter text-xs uppercase tracking-widest text-white font-bold">
            Legal
          </h5>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/privacy"
          >
            Privacy
          </Link>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/terms"
          >
            Terms
          </Link>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="font-inter text-xs uppercase tracking-widest text-neutral-400">
          © {new Date().getFullYear()} Indigent-Sc. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span
            className="material-symbols-outlined text-neutral-400 hover:text-white cursor-pointer"
            data-icon="public"
          >
            public
          </span>
          <span
            className="material-symbols-outlined text-neutral-400 hover:text-white cursor-pointer"
            data-icon="share"
          >
            share
          </span>
        </div>
      </div>
    </footer>
  );
}
