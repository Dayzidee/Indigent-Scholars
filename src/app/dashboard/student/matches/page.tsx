'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function StudentMatchesPage() {
  return (
    <div className="min-h-screen p-6 md:p-12 relative max-w-[1400px] mx-auto">
      {/* Header Section */}
      <header className="mb-10 max-w-5xl">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block font-label">Verified Content Only</span>
        <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-4 tracking-tight">Sponsor Matches</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl font-body">Connect with foundations, private donors, and corporate bodies dedicated to supporting academic excellence across Nigeria.</p>
      </header>

      {/* Lock Banner (The Scholarly Architect Asymmetry) */}
      <section className="relative mb-16 max-w-5xl group overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-primary opacity-10"></div>
        <div className="relative bg-zinc-800/60 backdrop-blur-md border border-outline-variant/30 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="bg-primary-container p-6 rounded-2xl rotate-3 shadow-lg group-hover:rotate-0 transition-transform duration-500">
            <span className="material-symbols-outlined text-white text-5xl font-variation-fill">lock</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-headline font-bold text-primary mb-3">Verification Required</h3>
            <p className="text-on-surface-variant mb-6 text-lg font-body">Complete your application to unlock direct matching with potential sponsors. Our verification process ensures institutional trust and high-impact placement.</p>
            <Link href="/dashboard/student/application">
              <button className="bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all font-headline">
                Complete My Application
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blurred Sponsor Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl relative">
        {/* Card 1 */}
        <div className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
          <div className="h-48 overflow-hidden relative">
            <Image 
              alt="Corporate Office" 
              className="w-full h-full object-cover filter blur-[20px]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbkLbH3eEKS2Iuhrsdabscdlmw_PpwwhoX0SdSxtpTgx4Mmqvh2P37TWUzi_3uarPP0aB9d_MKYSSZGZ7eL6W3VdLb-RLrUIfQzElJ40G83BCr0qpfYybvMM0FkAwE9PoFTTSYG2wjPvMmPWp6Y71mdzLGjJnlQoreoMCbIw8bZy_aS4lbTwJor9X8h2LfZ-xir1vF_aYdZ-CwBeV3nLLdA8izeGViiXIab41sCEZoRwzZoyeX-F5BBLu3O05NF0sGdkJRF3pmQD59"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-6 filter blur-[12px]">
            <div className="h-6 w-3/4 bg-zinc-700 mb-3 rounded"></div>
            <div className="h-4 w-full bg-zinc-800 mb-2 rounded"></div>
            <div className="h-4 w-5/6 bg-zinc-800 mb-6 rounded"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-zinc-700 rounded-full"></div>
              <div className="h-6 w-20 bg-zinc-700 rounded-full"></div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-outline-variant/50 text-4xl">lock_open</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 lg:col-span-2 md:h-auto h-80">
          <div className="absolute inset-0">
            <Image 
              alt="Foundation Team" 
              className="w-full h-full object-cover filter blur-[25px]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9JEx7Mx4qr9Inyc6b0C2TYZ2EJnwST4lrfcpw7RjgkSe_fveNlWl1dzueQQa-ytDFjw7B_PcRECnii1G3o0UjYIGrsM1AnNF8UwV2ZWOw1GP109sJvj19geiyY_KgbvKbvHYKCb6pQvsycTqmIdYfOcVVrJZWoe0bOG6Idw8K39tzWoi3ar0Pm-7Oh4jxSrMUoOfrGFtPBq855smwkEdIVfkRdrG6QPZXL9ABcCqvRbqHxfIycM8Uah7Zesspgvh8FHs0Q0l9R_"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>
          <div className="relative h-full p-8 flex flex-col justify-end filter blur-[14px]">
            <div className="h-8 w-1/3 bg-zinc-700 mb-3 rounded"></div>
            <div className="h-4 w-1/2 bg-zinc-800 rounded"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/5">
            <span className="material-symbols-outlined text-white/40 text-6xl font-variation-thin">verified_user</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
          <div className="h-48 overflow-hidden relative">
            <Image 
              alt="Education Fund" 
              className="w-full h-full object-cover filter blur-[20px]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuwztPU0aVM3K72c2juzmWLn8eL_Wmqcl1AQzJRnJuHoJalfqGiXqw1gh0Ao6jH5-COh029UT_Oyb_XApjwc2EvxPjPkQxOaieGTMxV637MX5i9GTAQtCGw8iqva4ixyBjiFoD008S0LOlwtIcKVE0shd58PFaU2fnYRfFBsZ8tNcvlfU0eVGp7hwVbu41x1q8zSKZF-P3Bn25YFNJivsH5JpEgGTbKLIkKGWAglDNfI2dWQi2slNAx_S3ZlMK7npGz_N_IJigU9wy"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-6 filter blur-[12px]">
            <div className="h-6 w-3/4 bg-zinc-700 mb-3 rounded"></div>
            <div className="h-4 w-full bg-zinc-800 mb-2 rounded"></div>
            <div className="h-4 w-5/6 bg-zinc-800 mb-6 rounded"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-outline-variant/50 text-4xl">visibility_off</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
          <div className="h-48 overflow-hidden relative">
            <Image 
              alt="Impact Group" 
              className="w-full h-full object-cover filter blur-[20px]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_wzgj4lOSJCpTsGcGNwahY2haubF71qjw5ukD-xTOCxOAZJoW4mS-R5LX0E9ucs6hXFbqcIBdJCQgniPb4LQ3Gm5kjW-Iy4ZhvQ1uiYC3v90jpgukTVdz3T_lP3kV10zhoMuqM0jwxAIRkSaG1MtYVD2_nIEdsY1l_O23_OOChUuccqeDjn2h0usR1oJY3zvQag5q8X07IzAWtMQ54nOQbfCxxgCv4CCVhVonYUivDqUuZ1Eh6PxoDQDWvNn5_PbcQZA4hC6oog8A"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-6 filter blur-[12px]">
            <div className="h-6 w-3/4 bg-zinc-700 mb-3 rounded"></div>
            <div className="h-4 w-full bg-zinc-800 mb-2 rounded"></div>
            <div className="h-4 w-5/6 bg-zinc-800 mb-6 rounded"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-outline-variant/50 text-4xl">vpn_lock</span>
          </div>
        </div>

        {/* Card 5 */}
        <div className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
          <div className="h-48 overflow-hidden relative">
            <Image 
              alt="University Partnership" 
              className="w-full h-full object-cover filter blur-[20px]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5TfdvG9FPZGsYypUfJJV5l0bX1zMzV3E6IUFs6JrqLSq3FPusGAz2SXV6PbS9NyOwyug6gWHyUhLm0n_3ijYyKX4-CYPdOfriWhJKhQ5eDtl5a3Xy3LdT02y-lUoMGg8XIxfLeZXZvf22q63R61X0qG34GSJrwFYp5Kuwk9cuycaJ2cIOcIaidtGXV5HIk-N7aBZJ3J0f8Qx7--7O4kw5InI30IR1yadkW1m1CPXkZh2iCUTqfnejXSC9YjkGrjgjVeuhTvAa8qRA"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-6 filter blur-[12px]">
            <div className="h-6 w-3/4 bg-zinc-700 mb-3 rounded"></div>
            <div className="h-4 w-full bg-zinc-800 mb-2 rounded"></div>
            <div className="h-4 w-5/6 bg-zinc-800 mb-6 rounded"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-outline-variant/50 text-4xl">security</span>
          </div>
        </div>
      </div>

      {/* Impact Tracker Background Subtle Element */}
      <div className="mt-24 bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/20 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="flex-1 relative z-10">
          <h4 className="text-2xl font-headline font-bold text-primary mb-4">Why Sponsor Matching?</h4>
          <p className="text-on-surface-variant leading-relaxed mb-6 font-body">Our algorithms analyze your academic profile and socioeconomic background to pair you with sponsors who share your vision for the future. Over 5,000 Nigerian students have already been connected through this system.</p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "AB6AXuAEBFyG8ueabMk5bbt7Cm5p6DmimZ9u1WB0vRen-p27o0qTHHxVN7-_LpkxDvvVe-a67m1xn6tKDwFfI8KH2nJoqBGsJYYWYx2-3H7HBs-qEH_lYdBkaHMRJXhkYig56l9DINCuEsHU0l3oHMeziOLTKCblHwCqxSMh_zN2xPpEsnXZkFKa7s_n2FD7_Ppd3WNyCxN9xsCLMtuuLNvfFfxADoO9RLqXEGzEORUPNlArx0lhcwmG_cTABIVvOnhyfsJzNKPxiAaWFjCV",
                "AB6AXuAxdz7hdv4IM37Og1uusc-abszCaE0iWopopz1jV-F8AdfnGsObOW8fUXV2ZeMTuelqm3ltfW2zyyUGwS76dnRTG1szGW_w9skuW3sGgtdZRT5eUaHl3Qg7QZ3ZfIVfSolpS8i8o1nygZCUWypMWYsuOjyZJs0Jlno4CChvmw6aN9ngcHDdBfaiY8S_EPYbmBZJ477XOxZBJ9twKkl4Hp-qOLzNkruxI9ral8JHhNk7W7LLH2WVAZZo1khi25dB_nb_1GVHi1NSXn0z",
                "AB6AXuDJoRwtlGSqCcD9rLz1QaV4Zop4csot2QRKKiw_hYmW6TjqXwdOMhN2CNOhCHDOtjxHD7ZgbR5hmGRdWO8pg7h0fjlViAiOf-76IybMOcTLb046bRzihZwxwfeLF8pisGNdYxd04oeoiz96uLIYDGbQxnHweqxJ5ocvKUUsYsr-gebcU7xIH7X1fAL3ssxFogl0S5eJlyQKd-TiWqGEkOmo69K3MMgSnU88Ww4kvnyku0fpwqLoAX2GeWGbV5UXClTHVypYff11dUVv"
              ].map((id, idx) => (
                <div key={idx} className="w-10 h-10 rounded-full border-2 border-zinc-800 relative overflow-hidden">
                  <Image alt="Scholar" fill src={`https://lh3.googleusercontent.com/aida-public/${id}`} />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-zinc-800 bg-secondary-fixed text-[10px] font-bold flex items-center justify-center text-on-secondary-fixed">5k+</div>
            </div>
            <span className="text-sm font-medium text-zinc-500 font-label">Verified scholars active</span>
          </div>
        </div>
        <div className="w-full md:w-1/3 relative z-10">
          {/* Impact Tracker */}
          <div className="space-y-4">
            <div className="flex justify-between text-sm font-semibold text-primary font-label">
              <span>Application Progress</span>
              <span>45%</span>
            </div>
            <div className="h-3 w-full bg-zinc-700 rounded-full overflow-hidden">
              <div className="h-full bg-tertiary-container w-[45%] rounded-full"></div>
            </div>
            <p className="text-xs text-zinc-500 italic font-body">2 steps remaining to unlock matching</p>
          </div>
        </div>
      </div>
    </div>
  )
}
