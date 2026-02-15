export function InstitutionalCta() {
  return (
    <section className="py-24 bg-background-dark border-t border-[#2b3139]">
      <div className="max-w-[960px] mx-auto px-6 text-center">
        <h2 className="text-white text-4xl md:text-5xl font-black mb-6 tracking-tight">
          Ready to upgrade your infrastructure?
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Join the world's leading institutions trading on TradePro. Contact our
          institutional sales team for a personalized demo and pricing tiers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-yellow-400 transition-colors text-[#181611] text-base font-bold">
            Contact Sales
          </button>
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#2b3139] hover:bg-[#3a414b] transition-colors text-white text-base font-bold">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
