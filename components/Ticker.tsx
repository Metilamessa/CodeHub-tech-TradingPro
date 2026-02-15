const TICKERS = [
  ["BTC/USDT", "43,210.50", "+2.45%", "text-positive"],
  ["ETH/USDT", "2,285.14", "-0.85%", "text-negative"],
  ["SOL/USDT", "98.75", "+5.67%", "text-positive"],
  ["BNB/USDT", "312.45", "+1.02%", "text-positive"],
  ["XRP/USDT", "0.5421", "-1.20%", "text-negative"],
  ["ADA/USDT", "0.4890", "+0.45%", "text-positive"],
  ["AVAX/USDT", "35.20", "+3.12%", "text-positive"],
  ["DOGE/USDT", "0.0812", "-0.55%", "text-negative"]
];

export function Ticker() {
  return (
    <div className="w-full border-b border-border-dark bg-card-dark py-2 overflow-hidden flex z-40 relative">
      <div className="flex animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div
            key={idx}
            className="flex gap-8 px-4 items-center"
            aria-hidden={idx === 1}
          >
            {TICKERS.map(([pair, price, change, cls]) => (
              <div
                key={`${pair}-${idx}`}
                className="flex items-center gap-2 text-xs font-mono font-medium"
              >
                <span className="text-text-secondary">{pair}</span>
                <span className="text-white">{price}</span>
                <span className={cls}>{change}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


