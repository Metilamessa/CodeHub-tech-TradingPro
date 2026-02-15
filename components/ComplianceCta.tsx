export function ComplianceCta() {
  return (
    <section className="py-24 border-t border-border-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-black mb-6">
          Partner with a Regulated Leader
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Join over 500 institutional clients who trust TradePro for its
          unwavering commitment to legal compliance and operational excellence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 h-12 bg-primary hover:bg-yellow-500 text-background-dark font-bold rounded-lg transition-colors">
            Contact Compliance Team
          </button>
          <button className="px-8 h-12 bg-surface-dark border border-border-dark hover:bg-border-dark text-white font-bold rounded-lg transition-colors">
            Full Legal Documentation
          </button>
        </div>
      </div>
    </section>
  );
}





