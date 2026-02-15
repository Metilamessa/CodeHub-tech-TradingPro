export function ComplianceStatus() {
  return (
    <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
      <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">
        Compliance Status
      </h4>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">
              verified
            </span>
            <span className="text-gray-500 text-sm">Regulatory License</span>
          </div>
          <span className="text-green-500 text-xs font-bold font-mono">
            ACTIVE
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">
              security
            </span>
            <span className="text-gray-500 text-sm">SOC 2 Type II</span>
          </div>
          <span className="text-green-500 text-xs font-bold font-mono">
            CERTIFIED
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">
              gavel
            </span>
            <span className="text-gray-500 text-sm">AML Auditor</span>
          </div>
          <span className="text-white text-xs font-bold">Deloitte Global</span>
        </div>
      </div>
      <button className="w-full mt-6 py-3 bg-white/5 border border-border-dark hover:bg-white/10 transition-all rounded-lg text-white text-sm font-bold flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-sm">description</span>
        Download Full PDF
      </button>
    </div>
  );
}

