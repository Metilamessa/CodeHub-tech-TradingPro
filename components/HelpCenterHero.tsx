"use client";

export function HelpCenterHero() {
  return (
    <section className="relative hero-gradient py-24 px-6 overflow-hidden">
      {/* Abstract 3D Shapes Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 transform -rotate-12 w-24 h-24 bg-surface-dark border border-border-dark rounded-xl shadow-2xl"></div>
        <div className="absolute top-1/3 right-1/4 transform rotate-45 w-16 h-16 bg-surface-dark border border-border-dark rounded-xl shadow-2xl"></div>
      </div>
      <div className="max-w-[800px] mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          How can we help you today?
        </h2>
        <div className="glass-morphism p-2 rounded-xl flex items-center shadow-2xl">
          <span className="material-symbols-outlined ml-4 text-gray-400">
            search
          </span>
          <input
            className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-gray-500 text-lg px-4 py-3"
            placeholder="Search help articles, guides, and more..."
            type="text"
          />
          <button className="bg-primary text-black font-bold px-6 py-3 rounded-lg mr-1 hover:opacity-90">
            Search
          </button>
        </div>
        <p className="mt-6 text-gray-400 text-sm">
          Popular:{" "}
          <a className="underline hover:text-primary" href="#">
            2FA Setup
          </a>
          ,{" "}
          <a className="underline hover:text-primary" href="#">
            Withdrawal Limits
          </a>
          ,{" "}
          <a className="underline hover:text-primary" href="#">
            API Documentation
          </a>
        </p>
      </div>
    </section>
  );
}



