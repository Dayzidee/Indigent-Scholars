import { ContactForm } from './ContactForm';

export function ContactSection() {
  const contactInfo = [
    { icon: 'mail', label: 'Email Us', value: 'partnership@indigent-sc.edu.ng' },
    { icon: 'location_on', label: 'Visit Headquarters', value: 'Lumina House, Victoria Island, Lagos' }
  ];

  return (
    <section className="py-32 bg-transparent relative z-[1]">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <span className="text-primary-fixed-dim font-headline font-black text-xs uppercase tracking-[0.2em] mb-6 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter mb-10 text-on-surface">
              Let&apos;s talk about the future.
            </h2>
            <div className="space-y-8">
              {contactInfo.map(item => (
                <div key={item.label} className="flex items-start gap-6 p-6 rounded-3xl hover:bg-surface-container-low/50 transition-all cursor-pointer border border-transparent hover:border-outline-variant/10 group">
                  <span className="material-symbols-outlined text-primary-fixed-dim p-4 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-black text-sm text-on-surface uppercase tracking-widest font-label mb-1">{item.label}</p>
                    <p className="text-on-surface-variant text-base font-medium font-body">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
