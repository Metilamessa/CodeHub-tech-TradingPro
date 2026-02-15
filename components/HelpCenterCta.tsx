export function HelpCenterCta() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pb-24">
      <div className="bg-primary rounded-xl p-10 md:p-16 text-black text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <span className="material-symbols-outlined text-[120px]">help</span>
        </div>
        <h3 className="text-3xl font-bold mb-4 relative z-10">
          Still can't find what you're looking for?
        </h3>
        <p className="text-black/80 mb-10 max-w-lg mx-auto relative z-10">
          Submit a support request and our team will get back to you within 2
          hours. Professional tier accounts receive priority response.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button className="px-10 py-4 bg-black text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
            Submit a Request
          </button>
          <button className="px-10 py-4 bg-transparent border-2 border-black text-black font-bold rounded-lg hover:bg-black/5 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}



