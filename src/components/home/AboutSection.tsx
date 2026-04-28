import Link from 'next/link';

export function AboutSection() {
  return (
    <section
      id="problem"
      className="bg-white/5 backdrop-blur-2xl relative z-10 py-24 border-y border-zinc-800/10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
    >
      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <span className="text-primary-fixed-dim font-headline font-black text-xs uppercase tracking-[0.2em] mb-4 block">
          Our Mission
        </span>
        <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter mb-8 relative z-10 text-on-surface">
          Democratizing Educational Excellence
        </h2>
        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto relative z-10 font-body font-medium">
          Indigent-Sc is more than a platform; it&apos;s a movement dedicated to
          bridging the financial gap for Nigeria&apos;s most brilliant minds. By
          combining institutional verification with transparent philanthropy,
          we ensure that every contribution creates a lasting academic legacy.
        </p>
        <Link
          className="inline-flex items-center text-primary-fixed-dim font-black text-sm group relative z-10 uppercase tracking-widest font-label"
          href="/about"
        >
          Read our full story
          <span className="material-symbols-outlined ml-3 transition-transform group-hover:translate-x-1">
            arrow_right_alt
          </span>
        </Link>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/2 to-white/5 pointer-events-none -z-10"></div>
    </section>
  );
}
