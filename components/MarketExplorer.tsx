"use client";

import { useState } from "react";

export function MarketExplorer() {
  const [activeTab, setActiveTab] = useState("Crypto");

  const markets = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      pair: "BTC / USD",
      price: "$64,210.50",
      change: "+3.42%",
      changeType: "positive",
      marketCap: "$1.26 Trillion",
      volume: "$45.2B",
      liquidity: 92,
      sparkline: "M0 20 L 10 18 L 20 15 L 30 19 L 40 10 L 50 12 L 60 5 L 70 8 L 80 2",
      sparklineColor: "#0ecb81",
      bgColor: "bg-[#f7931a]/10",
      textColor: "text-[#f7931a]",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      pair: "ETH / USD",
      price: "$3,452.12",
      change: "-1.15%",
      changeType: "negative",
      marketCap: "$414.8B",
      volume: "$18.4B",
      liquidity: 78,
      sparkline: "M0 5 L 10 8 L 20 6 L 30 12 L 40 15 L 50 18 L 60 14 L 70 19 L 80 22",
      sparklineColor: "#f6465d",
      bgColor: "bg-accent-blue/10",
      textColor: "text-accent-blue",
    },
    {
      symbol: "NVDA",
      name: "NVIDIA Corp.",
      pair: "NAS: NVDA",
      price: "$824.15",
      change: "+2.84%",
      changeType: "positive",
      marketCap: "$2.06 Trillion",
      volume: "$52.1B",
      liquidity: 95,
      sparkline: "M0 22 L 10 20 L 20 18 L 30 15 L 40 12 L 50 8 L 60 4 L 70 2 L 80 1",
      sparklineColor: "#0ecb81",
      bgColor: "bg-green-500/10",
      textColor: "text-green-500",
    },
  ];

  return (
    <section id="market-explorer">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Market Explorer</h2>
          <p className="text-text-secondary text-sm">
            Professional real-time price action across global sectors.
          </p>
        </div>
        <div className="flex gap-2 bg-card-dark p-1 rounded-custom border border-border-dark">
          {["Crypto", "Stocks", "Forex", "Indices"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm font-semibold rounded-custom transition-colors ${
                activeTab === tab
                  ? "bg-primary text-black font-bold"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-card-dark border border-border-dark rounded-custom overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[11px] font-bold text-text-secondary uppercase tracking-wider border-b border-border-dark bg-[#1c2127]">
                <th className="px-6 py-4">Asset Name</th>
                <th className="px-6 py-4">Current Price</th>
                <th className="px-6 py-4">24h Change</th>
                <th className="px-6 py-4">Market Cap</th>
                <th className="px-6 py-4">Volume (24h)</th>
                <th className="px-6 py-4">Liquidity Depth</th>
                <th className="px-6 py-4 text-center">Price Action (7d)</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-dark">
              {markets.map((market, index) => (
                <tr
                  key={index}
                  className="market-row transition-all cursor-pointer group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full ${market.bgColor} flex items-center justify-center font-bold ${market.textColor}`}
                      >
                        {market.symbol}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                          {market.name}
                        </div>
                        <div className="text-[10px] text-text-secondary uppercase tracking-widest">
                          {market.pair}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-mono text-sm text-white font-semibold">
                    {market.price}
                  </td>
                  <td className="px-6 py-5">
                    <div
                      className={`flex items-center gap-1 ${
                        market.changeType === "positive" ? "text-positive" : "text-negative"
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {market.changeType === "positive"
                          ? "trending_up"
                          : "trending_down"}
                      </span>
                      <span className="text-sm font-bold">{market.change}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-mono text-text-primary">
                    {market.marketCap}
                  </td>
                  <td className="px-6 py-5 text-sm font-mono text-text-primary">
                    {market.volume}
                  </td>
                  <td className="px-6 py-5">
                    <div className="w-24 h-1.5 bg-background-dark rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${market.liquidity}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <svg
                      className="sparkline-svg inline-block"
                      viewBox="0 0 80 24"
                    >
                      <path
                        d={market.sparkline}
                        fill="none"
                        stroke={market.sparklineColor}
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-xs font-bold text-primary border border-primary/30 px-4 py-2 rounded-custom hover:bg-primary hover:text-black transition-all">
                      Trade Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-[#161A1E] border-t border-border-dark flex items-center justify-between">
          <div className="text-xs text-text-secondary flex gap-4">
            <span>Showing 1-15 of 5,204 Assets</span>
            <span className="text-primary/60">•</span>
            <span>Real-time WebSocket active</span>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-custom border border-border-dark text-text-secondary hover:text-white hover:bg-white/5">
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-custom bg-primary text-black font-bold text-sm">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-custom border border-border-dark text-text-secondary hover:text-white hover:bg-white/5 font-bold text-sm">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-custom border border-border-dark text-text-secondary hover:text-white hover:bg-white/5 font-bold text-sm">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-custom border border-border-dark text-text-secondary hover:text-white hover:bg-white/5">
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

