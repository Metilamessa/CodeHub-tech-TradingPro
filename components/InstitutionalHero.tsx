import Image from "next/image";

export function InstitutionalHero() {
  return (
    <div className="relative min-h-[93vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDykuwk0QVrZRy4alJZc89tOi3J5vAvGApDaPtFpoFWDnXA6o2QyjvyGX0RCJw9pCQ8FTf6rWycpwWPPgTYSbgwewOuji4c4M3YHzE7WdE8lNb_c5x_VrrIlRFCAlkC078PoB1xN6Jtar8h6eUJB2XMAqb1yXPskk7cyd6VQyqRDFxOOlN6g-BVAqR9K_xUfiOYQ6jTgNbnTjT6SUWHBD3GjppUE1PU742iUXpBFgcwRMAQv62EpkUEYQurBqLnzXx5T50VbKlfEt0")',
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0b0e11]/80 via-[#0b0e11]/50 to-[#0b0e11]"></div>
      <div className="absolute inset-0 z-0 bg-hero-glow"></div>
      <div className="relative z-20 flex flex-col items-center text-center max-w-5xl px-4 animate-fade-in-up">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Live Network Status
        </div>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-[-0.04em] mb-6 drop-shadow-2xl">
          Institutional Liquidity.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Global Connectivity.
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-normal leading-relaxed mb-10">
          Infrastructure for the world's most demanding traders. Experience the
          future of financial stability, deep liquidity, and unmatched scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-yellow-400 transition-all text-[#181611] text-base font-bold tracking-wide shadow-[0_0_20px_rgba(244,188,6,0.3)]">
            Inquire for Access
          </button>
          <button className="flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-lg h-14 px-8 border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-base font-bold tracking-wide backdrop-blur-sm">
            View Connectivity Map
          </button>
        </div>
      </div>
      {/* Scrolling Ticker/Highlight at bottom of Hero */}
      <div className="absolute bottom-0 left-0 w-full border-t border-[#2b3139] bg-[#0b0e11]/80 backdrop-blur-md py-6 z-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-10 flex flex-wrap justify-between items-center gap-6 md:gap-12">
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
              Monthly Volume
            </span>
            <span className="text-white text-2xl font-bold tracking-tight">
              $50B+
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
              Uptime Reliability
            </span>
            <span className="text-white text-2xl font-bold tracking-tight">
              99.99%
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
              Inst. Clients
            </span>
            <span className="text-white text-2xl font-bold tracking-tight">
              500+
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
              Avg Latency
            </span>
            <span className="text-white text-2xl font-bold tracking-tight">
              &lt; 5ms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
