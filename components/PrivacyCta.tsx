export function PrivacyCta() {
  return (
    <section className="py-16 bg-surface-dark border-y border-border-dark">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <span className="material-symbols-outlined text-primary text-4xl mb-6">
          contact_support
        </span>
        <h3 className="text-2xl font-bold mb-4">Privacy Questions?</h3>
        <p className="text-gray-400 mb-8">
          If you have inquiries regarding our data processing practices or wish
          to exercise your rights, please contact our Data Protection Officer.
        </p>
        <a
          href="mailto:privacy@tradepro.io"
          className="inline-flex items-center gap-2 bg-primary text-[#0b0e11] font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Contact DPO Team
        </a>
      </div>
    </section>
  );
}

