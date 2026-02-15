import Image from 'next/image';
import Link from 'next/link';
import { TradeproCareersHeader } from '@/components/TradeproCareersHeader';

export default function CareersContent() {
  return (
    <div  className="relative flex min-h-screen flex-col">
      <TradeproCareersHeader/>
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-background-dark/60 to-background-dark z-10"></div>
          <Image
            alt="Futuristic Office"
            className="w-full h-full object-cover grayscale-[30%]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3YlPva14qT3D0OOC-AybxekQpvYBHrxUy72yg9EmRyhmE_yqd3qK_V3Q2nL0SjItMdaYJsWifPaxWhqGw-zjUKEDtjFbWuwoJNSzfSE_esumM7F3FYIFI_UGO8czpbTucwCcvN0OKfgySdh04NV8XXbVhShS9jtOh7pug6_xFqQpYJPX_WHFlP7UJc8ZoSDsRYYUzBvW6lAuwB6k0Q1_3AeqqYugpVs8Fo2FnD8RxaROHjz0QYfLlvxy4fBrEFZ-L9MLeWoSWeAo"
            fill
            priority
            unoptimized
          />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Join the Elite
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            Build the Future <br />
            <span className="text-primary">of Finance.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Join a global team of engineers, traders, and visionaries redefining the global markets through relentless innovation and algorithmic precision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold rounded-lg text-lg hover:shadow-[0_0_20px_rgba(244,188,6,0.4)] transition-all"
              href="#roles"
            >
              View Openings
            </Link>
            <Link
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg text-lg backdrop-blur-sm border border-white/10 transition-all"
              href="#"
            >
              Our Culture
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values" className="py-24 bg-background-light dark:bg-background-dark border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Core Principles</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Precision at Scale.</h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-md">
              We operate at the intersection of high-frequency technology and institutional finance, where every millisecond and every line of code matters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-500">
              <div className="w-14 h-14 bg-slate-100 dark:bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-3xl group-hover:text-black">target</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Precision First</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Calculated excellence in every line of code. We don&apos;t just solve problems; we engineer optimal, high-performance solutions.
              </p>
            </div>
            {/* Value 2 */}
            <div className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-500">
              <div className="w-14 h-14 bg-slate-100 dark:bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-3xl group-hover:text-black">visibility</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Radical Transparency</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Open communication across all global desks. Ideas compete based on merit, regardless of hierarchy or seniority.
              </p>
            </div>
            {/* Value 3 */}
            <div className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-500">
              <div className="w-14 h-14 bg-slate-100 dark:bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-3xl group-hover:text-black">lightbulb</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Infinite Innovation</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Pushing the boundaries of what&apos;s possible in fintech. We embrace curiosity and the relentless pursuit of &quot;better.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life at TradePro Gallery */}
      <section id="life" className="py-24 bg-white dark:bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Life at <span className="text-primary">TradePro</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              An environment built for peak performance, world-class perks, and authentic collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="group relative aspect-square overflow-hidden rounded-2xl">
              <Image
                alt="State-of-the-art Trading Floor"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxcvmjGKuXY0PmrSfIB6lCHbPdMwrjBMj0W-qwDWa3bGcY5kGaEOHpNlPCi35pLs0Qpq7J1Q6K-lNPFT6cKfRiOCvBlXITHMB-2g_IpFFMNVvqslLbP_P6D5nAhPVhSW0G-jRqyJA9VoJcpNBjdtihsBPXmyS2EZNy8GyMD7CwCBL8xQTQMFHMobMoRCa3Gi-xWsaU0MqmCacWfEk9Wvul9O1Xp0SoWQ"
                fill
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-bold text-xl mb-1">Global Trading Floor</h4>
                <p className="text-sm text-white/80">Real-time operations across 3 continents</p>
              </div>
            </div>
            {/* Gallery Item 2 */}
            <div className="group relative aspect-square overflow-hidden rounded-2xl">
              <Image
                alt="Modern Collaboration Spaces"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC75VFkOsIvbNWmWUzZZ4Kq0cX5GgXNq42RNCJnDDRpqoE8TvL6nBLsm7rQsN6LZJJvGLzWo4gJQYSNcGPD7xz0y2LHLnBmOHqDaKlXlRqGDlBT3aM9Kg3dOBVLt7ELhPSF9BQ8ysN-NfNdxgPT8kcnBHaM8Uxmvg"
                fill
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-bold text-xl mb-1">Collaborative Pods</h4>
                <p className="text-sm text-white/80">Built for cross-functional innovation</p>
              </div>
            </div>
            {/* Gallery Item 3 */}
            <div className="group relative aspect-square overflow-hidden rounded-2xl">
              <Image
                alt="Employee Wellness Program"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqmPzD6xEi0yJP5KIl9mOL3LS3D4WYVBxO8mFO4cUoGS3KpQK0N2GQBvNfVRqmD7tHKvYK5pQdp0Vf8Lq2cKs3HGvYK5pQdp0Vf8Lq2cKs3HGvYK5pQdp0Vf8Lq"
                fill
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-bold text-xl mb-1">Premium Wellness</h4>
                <p className="text-sm text-white/80">On-site gym and recovery facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="roles" className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Join Our <span className="text-primary">Team</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              We&apos;re hiring engineers, quants, and operations leaders across all our global hubs.
            </p>
          </div>
          <div className="space-y-4">
            {/* Job 1 */}
            <div className="group p-6 md:p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">code</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Senior Backend Engineer (C++/Python)</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> London, UK
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden md:block text-sm font-mono text-slate-500">Ref: TP-2024-89</span>
                  <button className="bg-primary hover:bg-primary/90 text-black px-6 py-3 rounded-lg text-sm font-bold transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="group p-6 md:p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">analytics</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Quantitative Researcher</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> New York, NY
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden md:block text-sm font-mono text-slate-500">Ref: TP-2024-92</span>
                  <button className="bg-primary hover:bg-primary/90 text-black px-6 py-3 rounded-lg text-sm font-bold transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>

            {/* Job 3 */}
            <div className="group p-6 md:p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">cloud_upload</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">DevOps Engineer (Infrastructure)</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> Amsterdam, NL
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden md:block text-sm font-mono text-slate-500">Ref: TP-2024-95</span>
                  <button className="bg-primary hover:bg-primary/90 text-black px-6 py-3 rounded-lg text-sm font-bold transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-500 dark:text-slate-400 mb-6">Don&apos;t see a role that fits your profile?</p>
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-slate-300 dark:border-white/20 hover:bg-white/5 transition-colors font-bold">
              Join our Talent Pool
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-white dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">Global Hubs</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                We operate in the world&apos;s most dynamic financial centers. Our offices are designed to foster collaboration and peak performance.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                  <div>
                    <h4 className="font-bold text-lg">London</h4>
                    <p className="text-sm text-slate-500">European Headquarters, Canary Wharf</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                  <div>
                    <h4 className="font-bold text-lg">New York</h4>
                    <p className="text-sm text-slate-500">Trading Operations, Financial District</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                  <div>
                    <h4 className="font-bold text-lg">Singapore</h4>
                    <p className="text-sm text-slate-500">APAC Tech Hub, Marina Bay</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 border border-white/5">
              <Image
                alt="World Map"
                className="w-full h-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe-awSe2GqjBetHFfnCF_dAReHmcGt5I7UKgLiph4vuuqs2K-0h9ZCS6gcYSwwJ8sGDDQqTo3wl4V0eKeiea7uHNIEBWllvE2pSo1Z2bk04h1LapxTdgPJKN6k6G7ZYdqzaSERwCxRh1B4R1w2DBJ8sCIAqnfHeeCXtln2bg90JJI5pQzAJK5r2ApcUg8CkoKxD7mbldgLDp44ABZ9wixz87L8TSVBUypzMe7WnaUZcbL92b1V8jUHz8T0YM19NuZP8wwKny4G_SU"
                fill
                unoptimized
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-primary">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8 leading-tight">Ready to redefine the <br />industry?</h2>
          <p className="text-black/70 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
            We are always looking for exceptional talent to join our mission. Start your journey with TradePro today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-black text-white font-bold rounded-lg text-lg hover:scale-105 transition-transform shadow-xl">
              Browse All Roles
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border-2 border-black text-black font-bold rounded-lg text-lg hover:bg-black hover:text-white transition-all">
              Learn About Benefits
            </button>
          </div>
        </div>
      </section>
    </main>
    </div>
    
  );
}
