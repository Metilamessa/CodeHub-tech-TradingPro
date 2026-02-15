export function CookieHero() {
  return (
    <div className="mb-16 border-b border-border-dark pb-12">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-6">
        Last Updated: November 15, 2023
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-[#eaecef] text-4xl lg:text-6xl font-black tracking-tight mb-4">
            Cookie Policy
          </h1>
          <p className="text-[#848e9c] text-lg max-w-2xl leading-relaxed">
            This Cookie Policy explains how TradePro uses cookies and similar
            technologies to recognize you when you visit our platform.
          </p>
        </div>
        <button className="shrink-0 bg-primary hover:bg-[#e0ab0a] transition-colors text-background-dark px-8 py-3 rounded-xl text-md font-bold shadow-lg shadow-primary/10">
          Cookie Settings
        </button>
      </div>
    </div>
  );
}



