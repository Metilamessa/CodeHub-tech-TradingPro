export function PowerUsersSection() {
  return (
    <section className="relative bg-background-dark py-32 overflow-hidden border-b border-border-dark">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20" />
            <div className="relative bg-[#161a1e] border border-border-dark rounded-xl shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
              <div className="bg-[#0b0e11] px-4 py-2 border-b border-border-dark flex gap-2 items-center">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-xs text-text-secondary ml-4">
                  TradePro Terminal - BTC/USDT
                </div>
              </div>
              <div className="p-1 grid grid-cols-12 gap-1 h-[400px] bg-[#0b0e11]">
                <div className="col-span-9 bg-[#161a1e] rounded-sm p-2 flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  <div className="text-xs text-text-secondary mb-2 flex justify-between">
                    <span>BTC/USDT Perpetual</span>
                    <span className="text-white">43,210.50</span>
                  </div>
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 50"
                  >
                    <defs>
                      <linearGradient
                        id="chartGrad"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#0ecb81" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 40 L 10 35 L 20 38 L 30 25 L 40 30 L 50 15 L 60 20 L 70 10 L 80 12 L 90 5 L 100 8"
                      fill="none"
                      stroke="#0ecb81"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M0 40 L 10 35 L 20 38 L 30 25 L 40 30 L 50 15 L 60 20 L 70 10 L 80 12 L 90 5 L 100 8 V 50 H 0 Z"
                      fill="url(#chartGrad)"
                      opacity="0.2"
                    />
                  </svg>
                </div>
                <div className="col-span-3 flex flex-col gap-1">
                  <div className="flex-1 bg-[#161a1e] rounded-sm p-2">
                    <div className="flex flex-col gap-1">
                      {[90, 60, 75, 40, 80].map((w, i) => (
                        <div
                          key={`sell-${i}`}
                          className="h-1 bg-negative opacity-40 self-end"
                          style={{ width: `${w}%` }}
                        />
                      ))}
                      <div className="my-2 border-t border-dashed border-border-dark" />
                      {[80, 50, 90, 30, 60].map((w, i) => (
                        <div
                          key={`buy-${i}`}
                          className="h-1 bg-positive opacity-40"
                          style={{ width: `${w}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="h-1/3 bg-[#161a1e] rounded-sm p-2 flex flex-col justify-between">
                    <div className="flex gap-2 mb-2">
                      <div className="w-1/2 bg-positive text-black text-[8px] font-bold text-center py-1 rounded-sm">
                        BUY
                      </div>
                      <div className="w-1/2 bg-negative text-white text-[8px] font-bold text-center py-1 rounded-sm">
                        SELL
                      </div>
                    </div>
                    <div className="h-6 bg-[#0b0e11] rounded-sm border border-border-dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-black text-white sm:text-4xl tracking-tight mb-6">
              Engineered for <span className="text-primary">Power Users</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Our interface is built for speed and precision. Completely
              customizable workspace with multi-monitor support, advanced
              charting libraries, and one-click execution directly from the
              charts.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#161a1e] border border-border-dark flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined">
                    settings_suggest
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    Fully Customizable
                  </h4>
                  <p className="text-sm text-text-secondary mt-1">
                    Drag, drop, and resize widgets to create your perfect trading
                    environment.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#161a1e] border border-border-dark flex items-center justify-center shrink-0 text-accent-blue">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    Deep Analytics
                  </h4>
                  <p className="text-sm text-text-secondary mt-1">
                    Real-time on-chain data and sentiment analysis integrated into
                    your dashboard.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#161a1e] border border-border-dark flex items-center justify-center shrink-0 text-accent-purple">
                  <span className="material-symbols-outlined">api</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">API First</h4>
                  <p className="text-sm text-text-secondary mt-1">
                    WebSocket and REST APIs with comprehensive documentation for
                    algo-traders.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


