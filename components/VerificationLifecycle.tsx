interface VerificationStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  limit: string;
  status: "completed" | "pending" | "locked";
}

export function VerificationLifecycle() {
  const steps: VerificationStep[] = [
    {
      number: "01",
      title: "ONBOARDING",
      subtitle: "Basic Profile",
      description:
        "Email, name, and country of residence verification.",
      limit: "$10K",
      status: "completed",
    },
    {
      number: "02",
      title: "IDENTITY",
      subtitle: "KYC Level 1",
      description:
        "Government ID & Liveness Biometric check via 3D scan.",
      limit: "$2M",
      status: "pending",
    },
    {
      number: "03",
      title: "RESIDENCY",
      subtitle: "KYC Level 2",
      description:
        "Proof of Address (Utility Bill/Bank Statement) verification.",
      limit: "$50M",
      status: "locked",
    },
    {
      number: "04",
      title: "INSTITUTIONAL",
      subtitle: "Enterprise EDD",
      description:
        "Enhanced Due Diligence & Ultimate Beneficial Owner (UBO).",
      limit: "UNLIMITED",
      status: "locked",
    },
  ];

  const getStatusIcon = (status: VerificationStep["status"]) => {
    switch (status) {
      case "completed":
        return (
          <span className="material-symbols-outlined text-green-500 text-lg">
            check_circle
          </span>
        );
      case "pending":
        return (
          <span className="material-symbols-outlined text-primary text-lg">
            pending
          </span>
        );
      case "locked":
        return (
          <span className="material-symbols-outlined text-gray-700 text-lg">
            lock
          </span>
        );
    }
  };

  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary">
          account_tree
        </span>
        User Verification Lifecycle
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`bg-surface-dark border border-border-dark p-6 rounded-xl relative z-10 ${
              index === 1 ? "ring-1 ring-primary/30" : ""
            }`}
          >
            <div className="text-primary font-mono text-sm mb-4">
              {step.number}. {step.title}
            </div>
            <h4 className="text-white font-bold mb-2">{step.subtitle}</h4>
            <p className="text-sm text-gray-500">{step.description}</p>
            <div className="mt-4 pt-4 border-t border-border-dark flex items-center justify-between">
              <span className="text-[10px] font-bold text-gray-400">
                LIMIT: {step.limit}
              </span>
              {getStatusIcon(step.status)}
            </div>
          </div>
        ))}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border-dark -z-0"></div>
      </div>
    </section>
  );
}

