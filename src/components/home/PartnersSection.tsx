export function PartnersSection() {
  const schools = ["UNILAG", "UI IBADAN", "ABU ZARIA", "UNN", "LASU", "OAU IFE"];
  
  return (
    <section className="py-32 bg-transparent relative z-[1]">
      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <span className="text-primary-fixed-dim font-headline font-black text-xs uppercase tracking-[0.2em] mb-8 block">
          Ecosystem
        </span>
        <h2 className="text-4xl font-headline font-black tracking-tighter mb-20 text-on-surface">
          Partnering Institutions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-12 items-center opacity-70 hover:opacity-100 transition-opacity duration-700">
          {schools.map((school, i) => (
            <div key={i} className="h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-125 cursor-pointer group relative">
              <span className="font-headline font-black text-2xl text-on-surface/70 group-hover:text-primary-fixed-dim tracking-tighter transition-colors">{school}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
