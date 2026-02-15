"use client";

export function MarketsHero() {
  return (
    <section className="hero-gradient min-h-[600px] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/20 to-background-dark"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
            Real-time Terminal v4.0
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
          Institutional-Grade <span className="text-primary">Markets</span>
        </h1>
        <div className="glass-morphism max-w-3xl mx-auto rounded-2xl p-2 premium-glow">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-6 text-text-secondary text-2xl">
              search
            </span>
            <input
              className="w-full bg-transparent border-none rounded-xl py-6 pl-16 pr-32 text-white placeholder:text-text-secondary focus:ring-0 text-lg"
              placeholder="Search 5,000+ assets across Crypto, Stocks, and Forex..."
              type="text"
            />
            <div className="absolute right-4 flex items-center gap-3">
              <span className="text-xs font-mono text-text-secondary border border-border-dark px-2 py-1 rounded">
                CTRL + K
              </span>
              <button className="bg-primary hover:bg-primary-hover text-black font-bold px-6 py-3 rounded-xl transition-all">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center gap-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">$72.4B</div>
            <div className="text-xs text-text-secondary uppercase tracking-widest mt-1">
              24h Volume
            </div>
          </div>
          <div className="w-px h-10 bg-border-dark"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">0.02%</div>
            <div className="text-xs text-text-secondary uppercase tracking-widest mt-1">
              Market Spread
            </div>
          </div>
          <div className="w-px h-10 bg-border-dark"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5,204</div>
            <div className="text-xs text-text-secondary uppercase tracking-widest mt-1">
              Total Assets
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



