export function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden flex flex-col items-center justify-center bg-background-dark pt-[7vh]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#161a1e] via-background-dark to-background-dark" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 flex flex-col lg:flex-row items-center justify-between gap-16 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-1/2 text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161a1e] border border-border-dark text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Live Market Data
          </div>
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
            Trade the Future with{" "}
            <span className="text-gold-gradient">Professional Precision</span>
          </h1>
          <p className="text-xl text-text-secondary font-medium tracking-wide max-w-2xl leading-relaxed">
            Institutional-grade tools, real-time data, and world-class
            execution for every trader. Access deep liquidity and advanced
            order types.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
            <button className="w-full sm:w-auto rounded-lg bg-primary px-8 py-4 text-lg font-bold text-black transition hover:bg-primary-hover shadow-[0_0_20px_rgba(240,185,11,0.3)] flex items-center justify-center gap-2">
              Start Trading
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </button>
            <button className="w-full sm:w-auto rounded-lg bg-[#161a1e] border border-border-dark px-8 py-4 text-lg font-bold text-white transition hover:bg-[#20252b] flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-xl">
                download
              </span>
              Download App
            </button>
          </div>
          <div className="flex items-center gap-8 pt-8 border-t border-border-dark/50">
            <div>
              <div className="text-3xl font-bold text-white">24h</div>
              <div className="text-sm text-text-secondary">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$78B+</div>
              <div className="text-sm text-text-secondary">Quarterly Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">&lt;50ms</div>
              <div className="text-sm text-text-secondary">Latency</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 w-full aspect-square max-w-[600px] mx-auto animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E2329]/90 to-[#0b0e11]/90 rounded-2xl border border-border-dark shadow-2xl backdrop-blur-xl flex flex-col p-6 transform rotate-y-[-10deg] rotate-x-[5deg] transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0 group">
              <div className="flex items-center justify-between mb-6 border-b border-border-dark pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f0b90b] flex items-center justify-center font-bold text-black text-xs">
                    BTC
                  </div>
                  <div>
                    <div className="text-white font-bold">Bitcoin Perp</div>
                    <div className="text-xs text-positive">+2.45%</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono font-bold">
                    43,210.50
                  </div>
                  <div className="text-xs text-text-secondary">USD</div>
                </div>
              </div>
              <div className="flex-1 relative flex items-end justify-between gap-1 px-2">
                {[40, 55, 30, 65, 45, 20, 80].map((h, i) => (
                  <div
                    key={i}
                    className={`w-[8%] rounded-sm border relative transition-all duration-700 ${
                      h > 40 ? "bg-positive/20 border-positive/50" : "bg-negative/20 border-negative/50"
                    }`}
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] bottom-[-10px] w-[1px] bg-positive" />
                  </div>
                ))}
              </div>
              <div className="h-12 mt-4 flex items-end justify-between gap-1 border-t border-border-dark pt-2 opacity-60">
                {[40, 60, 30, 80, 50, 20, 90].map((h, i) => (
                  <div
                    key={i}
                    className="w-[8%] bg-text-secondary/30 rounded-t-sm"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 w-64 h-48 bg-[#161a1e]/80 backdrop-blur-md border border-border-dark rounded-xl p-4 shadow-xl">
              <div className="text-xs text-text-secondary mb-2 uppercase font-bold tracking-wider">
                Depth Map
              </div>
              <div className="flex items-end justify-center h-32 gap-0.5">
                <div className="w-1/2 h-full flex items-end justify-end gap-0.5">
                  {[20, 35, 45, 60, 80, 95].map((h, i) => (
                    <div
                      key={i}
                      className="w-2 bg-positive/60 last:bg-positive last:rounded-tr-md"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="w-1/2 h-full flex items-end justify-start gap-0.5">
                  {[90, 75, 55, 40, 25, 15].map((h, i) => (
                    <div
                      key={i}
                      className="w-2 bg-negative/70 first:rounded-tl-md"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background-dark to-transparent z-20" />
    </section>
  );
}


