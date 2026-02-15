export function UserProtections() {
  return (
    <section className="py-24 bg-surface-dark/50 border-t border-border-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              User Protections & Accountability
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-primary font-bold mb-4 uppercase text-xs tracking-widest">
                  Segregation of Assets
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  TradePro is legally required to separate client assets from
                  corporate operational funds. This ensures that even in extreme
                  scenarios, your capital remains protected and identifiable.
                </p>
              </div>
              <div>
                <h4 className="text-primary font-bold mb-4 uppercase text-xs tracking-widest">
                  Regulatory Audits
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We undergo quarterly financial and security audits by Tier-1
                  accounting firms and independent security auditors to verify
                  our solvency and infrastructure integrity.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background-dark p-8 rounded-2xl border border-border-dark">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                gavel
              </span>
              Reporting and Transparency
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              TradePro maintains an open line of communication with all
              regulatory bodies. We provide real-time reporting of transaction
              data where required and cooperate fully with global AML/KYC
              standards.
            </p>
            <button className="bg-primary hover:bg-yellow-500 text-background-dark font-bold py-3 px-6 rounded-lg text-sm transition-all">
              Download Transparency Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}





