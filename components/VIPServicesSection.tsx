import Link from "next/link";

export function VIPServicesSection() {
  const services = [
    {
      icon: "support_agent",
      bgIcon: "handshake",
      title: "OTC Desk",
      description:
        "Private execution for large block trades with minimal slippage. Our desk provides competitive pricing and settlement flexibility.",
      linkText: "Learn more",
    },
    {
      icon: "manage_accounts",
      bgIcon: "person_pin",
      title: "Dedicated Support",
      description:
        "24/7 access to dedicated account managers and market experts who understand your specific institutional needs.",
      linkText: "Contact Sales",
    },
    {
      icon: "api",
      bgIcon: "integration_instructions",
      title: "Custom Integrations",
      description:
        "Tailored API solutions to fit your specific trading infrastructure. We build bridges to your legacy systems.",
      linkText: "View Docs",
    },
  ];

  return (
    <section className="py-24 bg-[#0b0e11]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">VIP Services</h2>
          <p className="text-gray-400 text-lg">
            Tailored solutions for institutions requiring high-touch service and
            specialized execution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-surface-dark rounded-2xl p-8 border border-[#2b3139] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,188,6,0.1)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-white">
                  {service.bgIcon}
                </span>
              </div>
              <div className="w-14 h-14 rounded-lg bg-[#231e0f] text-primary flex items-center justify-center mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-3xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href="#"
                className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                {service.linkText}{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
