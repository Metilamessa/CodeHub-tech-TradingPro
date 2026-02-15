import Image from "next/image";

export function SecuritySection() {
  const features = [
    {
      icon: "verified_user",
      text: "100% Cold Storage for majority of assets",
    },
    {
      icon: "gavel",
      text: "Fully Regulated & Audited Entities",
    },
    {
      icon: "key",
      text: "Multi-Sig Wallets & MPC Technology",
    },
  ];

  return (
    <section className="py-24 bg-background-dark relative border-t border-[#2b3139]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="flex-1 w-full relative">
            {/* Abstract 3D Vault Image */}
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#2b3139] bg-surface-dark relative shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-10"></div>
              <Image
                alt="Abstract digital vault with glowing security locks"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4XQCs6aYcxVhOa2ZSlxgHMgCQr8K-YCMt7LqM5n9dt1-iAZcumTrkiBV2eh739ZqQ61ZmIokOHTHCK0yIf9u-XC7dz5x8WmUIRv_wk5FBu1_XGmKCPeySbIvFQBFoz0y1b77ikOWg-3cO7DXq4_-o8FLegXVmI_ZYID5QcnArr1ge3q7H_0KFGJvNXE1F_ZHp4V-YVeqB62yeS-njySKcszRc6Q1lc0SW0dV403Q3D3abhARXhK_sfhrPWZye6VE1K44j8MErQVc"
                width={800}
                height={600}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                Security First
              </span>
              <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
                Fortress-Grade
                <br />
                Custody & Compliance.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Your assets are secured by industry-leading cold storage protocols
                and multi-layer encryption. We operate with full regulatory
                compliance.
              </p>
            </div>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-surface-dark/50 border border-transparent hover:border-[#2b3139] transition-colors"
                >
                  <span className="material-symbols-outlined text-primary">
                    {feature.icon}
                  </span>
                  <span className="text-white font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
