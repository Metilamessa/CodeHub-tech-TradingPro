export function CtaSection() {
  return (
    <section className="relative bg-card-dark py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-black text-white sm:text-5xl tracking-tight">
          Ready to trade professionally?
        </h2>
        <p className="mt-6 text-xl text-text-secondary max-w-xl mx-auto">
          Join the platform chosen by institutions and professional traders
          worldwide.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="inline-flex h-14 items-center justify-center rounded-lg bg-primary px-10 text-lg font-bold text-black transition hover:bg-primary-hover shadow-[0_0_20px_rgba(240,185,11,0.2)] w-full sm:w-auto">
            Open Account
          </button>
          <button className="inline-flex h-14 items-center justify-center rounded-lg border border-border-dark bg-transparent px-10 text-lg font-bold text-white transition hover:bg-white/5 w-full sm:w-auto">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}


