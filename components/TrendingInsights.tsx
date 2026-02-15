export function TrendingInsights() {
  return (
    <div className="md:col-span-2 space-y-6">
      <h3 className="text-xl font-bold text-white flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">analytics</span>
        Trending Insights
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-card-dark border border-border-dark rounded-custom p-6 hover:border-primary/50 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase">
              Macro Analysis
            </span>
            <span className="text-text-secondary text-xs">2 hours ago</span>
          </div>
          <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
            The Federal Reserve's Impact on Tech Indices: Q4 Projection
          </h4>
          <p className="text-text-secondary text-sm line-clamp-2 mb-4">
            A deep dive into upcoming interest rate decisions and their direct
            correlation with NASDAQ-100 volatility...
          </p>
          <div className="flex items-center gap-4 pt-4 border-t border-border-dark/50">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-positive">bolt</span>
              <span className="text-xs font-bold text-positive">Bullish 78%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-text-secondary">
                visibility
              </span>
              <span className="text-xs text-text-secondary">12.4k</span>
            </div>
          </div>
        </div>
        <div className="bg-card-dark border border-border-dark rounded-custom p-6 hover:border-primary/50 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <span className="bg-blue-500/10 text-accent-blue text-[10px] font-bold px-2 py-1 rounded uppercase">
              Ecosystem Focus
            </span>
            <span className="text-text-secondary text-xs">4 hours ago</span>
          </div>
          <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
            Ethereum Layer 2 Adoption Hits Record Volume Milestones
          </h4>
          <p className="text-text-secondary text-sm line-clamp-2 mb-4">
            Analyzing the TVL growth across Arbitrum, Optimism, and Base as
            institutional interest pivots toward DeFi scalability...
          </p>
          <div className="flex items-center gap-4 pt-4 border-t border-border-dark/50">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-positive">bolt</span>
              <span className="text-xs font-bold text-positive">Strong Bullish</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-text-secondary">
                visibility
              </span>
              <span className="text-xs text-text-secondary">8.2k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



