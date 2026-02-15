export function FearGreedIndex() {
  return (
    <div className="bg-card-dark border border-border-dark rounded-custom p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
      <h3 className="text-sm font-bold text-text-secondary uppercase tracking-[0.2em] mb-8">
        Fear & Greed Index
      </h3>
      <div className="relative flex flex-col items-center">
        <div className="w-48 h-24 overflow-hidden relative">
          <div className="w-48 h-48 border-[12px] border-border-dark rounded-full"></div>
          <div className="absolute inset-0 w-48 h-48 border-[12px] border-transparent border-t-primary border-r-primary rounded-full transform rotate-[-45deg]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-background-dark z-10"></div>
        </div>
        <div className="text-4xl font-black text-white mt-4">74</div>
        <div className="text-sm font-bold text-positive uppercase tracking-widest mt-1">
          Extreme Greed
        </div>
      </div>
      <div className="mt-10 space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="text-text-secondary">Yesterday</span>
          <span className="text-white font-bold">68 (Greed)</span>
        </div>
        <div className="w-full h-1 bg-border-dark rounded-full">
          <div className="h-full bg-primary/30 w-[68%] rounded-full"></div>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-text-secondary">Last Month</span>
          <span className="text-white font-bold">52 (Neutral)</span>
        </div>
        <div className="w-full h-1 bg-border-dark rounded-full">
          <div className="h-full bg-primary/30 w-[52%] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}



