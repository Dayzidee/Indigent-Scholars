'use client';

import { FadeUpStagger } from '@/components/ui/FadeUpStagger';
import { SlideIn } from '@/components/ui/SlideIn';

const STUDENTS = [
  {
    id: 1,
    name: "Chioma Adebayo",
    university: "University of Ibadan",
    course: "Medicine",
    quote: "My dream is to revolutionize maternal healthcare in rural communities across West Africa.",
    fundingGoal: 75,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX6CPTVv0D5EL-PtVjQn0p3K1KVTkb8woDw1cyMcdctriJaqSwwrqJXJ-if3TSBYQ_dgWl0o4UjsDyI6NYaAlLJRHSb3SXain3zfogZGxms3SA75-i7gZ1NjHXtuSs3YVXBvuh6SkdPxlapuwEP6OBHexPrSrfRClG0HxTS00jjxzBUgu8iZe1sLFW04B4OzMq85OxcwAnbStuVWaZ0HBsww8-ywwIm06hS2wI-BAgeYrXENk44XPvbn_xkhhQJqsdymcC1Ey0rmGO"
  },
  {
    id: 2,
    name: "Ibrahim Lawal",
    university: "UNILAG",
    course: "Civil Engineering",
    quote: "Designing sustainable infrastructure that withstands the challenges of our growing urban centers.",
    fundingGoal: 42,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDpjtVHUqCpZfF20KFG6ey9Hau_8ZYBnUx-f6CA-vBpTA-LfQD-qsS5w6l1J71MmbMNU03Nci3j9hVDc5w2fgdo-bco20yCYCa89HXcBsbs4X1auXHq-YEEOYBJG0_DAojOXrvsgkHsp1nrQzsRqWH26bcgyxFtypNfqWflb1xVzNDPHeyiJpHiEqAriXzW4DLvecWD6TMy1byQIpj_1vccIGOYxqlA3tDXDFL4Bl1q8pLTc-DS-91colLCqDCND4SsQSVmbUotX9C"
  },
  {
    id: 3,
    name: "Amaka Okafor",
    university: "University of Nigeria",
    course: "Computer Science",
    quote: "Empowering the next generation of Nigerian girls through code and technological literacy.",
    fundingGoal: 90,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_IfeYIdMQkX8Xvbn2orTSTObqySnEjZb60x84JdU2YLSzjKLXQv3SQ5q92xJ3e2H_mmbQ7rCtbdf5tLTNSYekMDF9WvToDl5BxEHTYxdSHgPdZB4ESAqXcY5vznLhC5idxWKJHvIY7jkgis44jKDA4y1-iLeY72BL1ufQl_9qxPCLIkDPQX7YeEguT1Ji_9tXBvRvy77BrW-ackunmZeVNw6CoCkG2GV76EwE1UIx88Z9nMtUNUj0bdXJJagtiVy_2qKrD5BTlSZz"
  },
  {
    id: 4,
    name: "Olawale Johnson",
    university: "Obafemi Awolowo University",
    course: "Law",
    quote: "Championing legal rights for underprivileged entrepreneurs in Lagos' tech ecosystem.",
    fundingGoal: 15,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPhX-atr03sVREUuZw621DZ0Os8ZwhlqvisZaVRIdz12MiJoNVF65H60IoNKmrZ8RveWYlnjm11OI9ZsUE0ECk5OhIVE5G7TRGWXnA945vPR8FYzO8mUMMWB5oqNjxtEn9WvF_VXrPQOPoZ3_yFnpVpaRHZY52XnPi_40JzP6alhkWBjugJuXQYMgpQBa1hb8wijjSmanknOap3pUKNIpkBd0dWRZgAheFuYSyWbjiDWl3sBirY_UPnyfnZOQHevM1h8qwHpSWKi6Z"
  },
  {
    id: 5,
    name: "Tunde Bakare",
    university: "FUTA",
    course: "Architecture",
    quote: "Redefining African urbanism through modular and climate-adaptive housing solutions.",
    fundingGoal: 60,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUu4l0gjAYUR7AfYDOXhX3_XB46kamGRfyjkq1KilwV78_WIbn61wm-EbvpevJOp6Rwc7peR9AyiDvCl2l8XSli1wrfyQCAryNA2uvQKrlfDz19fBDB5XBX6vZq7S0cwP56OiD-Cdsapjyb6cfAzHvncb68wdwYL3r-M8dSGck07vBhlM1mj30cnIKqebrbOCL4tPDMbDU8O8LGkaWJDL4sV8t8FBNfjZiyDK_c4CgGVkwjAdqWSp2UviA6309O_NXIpFR9zhAvyen"
  },
  {
    id: 6,
    name: "Zainab Sani",
    university: "BUK",
    course: "Biochemistry",
    quote: "Researching indigenous flora for potential breakthroughs in tropical disease treatment.",
    fundingGoal: 33,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSkQrtJjBI97p8_mn4H1QMGLeOwkFi0ksqXjt8K-QMICl2eI9w4JenzdZiANobvVGpqJrGnpPFn6imqPmzWQE0HVsyFYPu9s1Mefy6Iuv0UYcwXzK-DEWDW2lSD4lDLaJP67MPUS_iDxOIad-OvNtKfgxZ_rrYY6Wh6CaLzMrvYybMeMCEoo75Pjjko59hLFNXVRfQIEgRMZr1rtKRFQZEYmsDFfCYIF7yYMfk7MnpJT-E65JN5j7NnIO2JyamCvGmNbRU7-y0bfnm"
  }
];

export default function VerifiedStudentsPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-16">
        <SlideIn direction="up" className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-lg bg-primary-fixed text-on-primary-fixed text-xs font-bold uppercase tracking-widest mb-4">
            The Talent Pool
          </span>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface tracking-tighter leading-[1.1] mb-6">
            Meet the Scholars of <span className="text-primary">Tomorrow</span>.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
            A directory of vetted Nigerian scholars across prestigious institutions, ready to lead the next generation of African innovation.
          </p>
        </SlideIn>
      </header>

      {/* Filters & Search */}
      <section className="mb-12 bg-surface-container-low p-6 rounded-xl flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative w-full md:w-1/3 text-on-surface-variant">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input 
            className="w-full bg-surface-container-lowest border-none rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-primary/40 text-on-surface-variant font-body" 
            placeholder="Search by name, university..." 
            type="text"
          />
        </div>
        <div className="flex flex-wrap gap-3 justify-center md:justify-end w-full md:w-auto">
          <button className="px-5 py-2 rounded-lg bg-primary text-on-primary font-semibold text-sm">All Fields</button>
          <button className="px-5 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-variant transition-colors font-semibold text-sm">Engineering</button>
          <button className="px-5 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-variant transition-colors font-semibold text-sm">Medicine</button>
          <button className="px-5 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-variant transition-colors font-semibold text-sm">Arts</button>
          <button className="px-5 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-variant transition-colors font-semibold text-sm">Tech</button>
        </div>
      </section>

      {/* Student Grid */}
      <FadeUpStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {STUDENTS.map((student) => (
          <div key={student.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-xl hover:shadow-on-surface/5 transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt={student.name} 
                src={student.image}
              />
              <div className="absolute top-4 right-4 bg-tertiary-container/90 backdrop-blur-md text-on-tertiary-container px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold uppercase tracking-tight">
                <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                Verified Scholar
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-1">{student.name}</h3>
              <p className="text-sm font-semibold text-primary mb-4">{student.university} • {student.course}</p>
              <p className="text-on-surface-variant italic mb-8 leading-relaxed">&quot;{student.quote}&quot;</p>
              
              <div className="mb-6">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Funding Goal</span>
                  <span className="text-sm font-bold text-on-surface">{student.fundingGoal}%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary-container rounded-full transition-all duration-1000 ease-in-out" 
                    style={{ width: `${student.fundingGoal}%` }}
                  ></div>
                </div>
              </div>
              
              <button className="w-full py-3 border-2 border-outline-variant text-on-surface font-headline font-bold rounded-xl hover:bg-primary-fixed hover:border-primary-fixed transition-colors">
                View Full Profile
              </button>
            </div>
          </div>
        ))}
      </FadeUpStagger>

      {/* Pagination */}
      <div className="mt-20 flex justify-center items-center gap-4">
        <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <div className="flex gap-2">
          <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold">1</button>
          <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high font-bold transition-colors">2</button>
          <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high font-bold transition-colors">3</button>
        </div>
        <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </main>
  );
}
