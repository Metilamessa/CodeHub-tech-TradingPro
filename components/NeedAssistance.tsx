export function NeedAssistance() {
  return (
    <div className="bg-[#1c1402] border border-primary/20 rounded-2xl p-6">
      <h4 className="text-primary font-bold mb-2">Need Assistance?</h4>
      <p className="text-xs text-primary/70 mb-4 leading-relaxed">
        Our dedicated compliance officers are available for institutional
        onboarding support.
      </p>
      <a
        href="#"
        className="text-white text-sm font-bold hover:underline flex items-center gap-2"
      >
        <span className="material-symbols-outlined text-primary text-base">
          support_agent
        </span>
        Contact Compliance Team →
      </a>
    </div>
  );
}

