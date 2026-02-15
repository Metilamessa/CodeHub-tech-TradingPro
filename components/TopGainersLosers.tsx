export function TopGainersLosers() {
  const gainers = [
    { symbol: "SOL", name: "Solana", pair: "SOL/USDT", price: "$145.20", change: "+14.85%" },
    { symbol: "FET", name: "Fetch.ai", pair: "FET/USDT", price: "$2.38", change: "+12.40%" },
  ];

  const losers = [
    { symbol: "ADA", name: "Cardano", pair: "ADA/USDT", price: "$0.452", change: "-8.12%" },
    { symbol: "XRP", name: "Ripple", pair: "XRP/USDT", price: "$0.581", change: "-5.44%" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-card-dark border border-border-dark rounded-custom overflow-hidden">
        <div className="p-6 border-b border-border-dark bg-positive/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-positive font-bold">
              rocket_launch
            </span>
            <h3 className="font-bold text-white">Top Daily Gainers</h3>
          </div>
          <button className="text-xs font-bold text-positive hover:underline">
            View All
          </button>
        </div>
        <div className="divide-y divide-border-dark">
          {gainers.map((gainer, index) => (
            <div
              key={index}
              className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-positive/10 rounded flex items-center justify-center font-bold text-positive text-xs">
                  {gainer.symbol}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{gainer.name}</div>
                  <div className="text-[10px] text-text-secondary">{gainer.pair}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-white">{gainer.price}</div>
                <div className="text-xs font-bold text-positive">{gainer.change}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-card-dark border border-border-dark rounded-custom overflow-hidden">
        <div className="p-6 border-b border-border-dark bg-negative/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-negative font-bold">
              show_chart
            </span>
            <h3 className="font-bold text-white">Top Daily Losers</h3>
          </div>
          <button className="text-xs font-bold text-negative hover:underline">
            View All
          </button>
        </div>
        <div className="divide-y divide-border-dark">
          {losers.map((loser, index) => (
            <div
              key={index}
              className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-negative/10 rounded flex items-center justify-center font-bold text-negative text-xs">
                  {loser.symbol}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{loser.name}</div>
                  <div className="text-[10px] text-text-secondary">{loser.pair}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-white">{loser.price}</div>
                <div className="text-xs font-bold text-negative">{loser.change}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



