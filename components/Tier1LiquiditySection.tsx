import Image from "next/image";

export function Tier1LiquiditySection() {
  return (
    <section className="relative py-24 bg-background-dark border-b border-[#2b3139]">
      <div className="absolute inset-0 opacity-10 bg-grid-pattern grid-bg pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                Global Network
              </span>
              <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
                Tier-1 Liquidity.
                <br />
                Zero Compromise.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Access deep pools and zero-compromise execution powered by our
                proprietary aggregation engines. We connect you directly to the
                world's primary liquidity sources.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-xl bg-surface-dark border border-[#2b3139] flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    hub
                  </span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">
                    Interconnected Nodes
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Latency-optimized routing through our 20+ global data centers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-xl bg-surface-dark border border-[#2b3139] flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    water_drop
                  </span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">
                    Deep Pool Access
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Direct market access to the world's deepest order books without
                    intermediaries.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-xl bg-surface-dark border border-[#2b3139] flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    route
                  </span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">
                    Smart Routing
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Intelligent algorithm ensures best price execution across 100+
                    venues.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            {/* Abstract 3D Node Visualization Image */}
            <div className="aspect-square w-full rounded-2xl overflow-hidden border border-[#2b3139] bg-surface-dark relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 mix-blend-overlay"></div>
              <Image
                alt="3D visualization of interconnected network nodes and data streams"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZXh3GSpDOTAmdKreHqDHqZBJisNjz7gen08sm8k9EesYp3tegQ2CbQ_hdpmz6hbSmW-mm-LqbuQB6BrT1CZ5j7SboRamJ0kBBVDLmJkiJSp-kl5gFLrA3s9_S29tCsoZuZnyoVTHnetgWCN2qY6ISz13vBY1DVdttI8-_zaa4Zarl-D-087rN7IXQmroTbXDEQm-pfL7Eynhg4pK8F-ev0lamDeeWsAHqfjPljLxRQ3eM4fhreRGtpfucXYhuIYOJQLTNPhXzGdE"
                width={600}
                height={600}
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Data Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#161A1E]/95 backdrop-blur-xl border border-[#2b3139] p-6 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] max-w-xs hidden md:block">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-xs font-mono">LIVE FEED</span>
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white font-medium">BTC/USD</span>
                  <span className="text-primary font-mono">42,105.50</span>
                </div>
                <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[70%]"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Vol: 1.2M</span>
                  <span>+2.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
