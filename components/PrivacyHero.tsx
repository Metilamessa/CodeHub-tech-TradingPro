import Image from "next/image";

export function PrivacyHero() {
  return (
    <section className="relative py-20 overflow-hidden border-b border-border-dark">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="material-symbols-outlined text-xs">gpp_good</span>
              Privacy and Compliance
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Your Privacy.
              <br />
              <span className="text-primary">Our Priority.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              At TradePro, we understand that trust is the foundation of
              institutional trading. Our Privacy Policy outlines how we collect,
              protect, and handle your sensitive data with world-class security
              protocols.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              Last Updated: October 24, 2023
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                alt="3D high-fidelity security shield representing data protection"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4XQCs6aYcxVhOa2ZSlxgHMgCQr8K-YCMt7LqM5n9dt1-iAZcumTrkiBV2eh739ZqQ61ZmIokOHTHCK0yIf9u-XC7dz5x8WmUIRv_wk5FBu1_XGmKCPeySbIvFQBFoz0y1b77ikOWg-3cO7DXq4_-o8FLegXVmI_ZYID5QcnArr1ge3q7H_0KFGJvNXE1F_ZHp4V-YVeqB62yeS-njySKcszRc6Q1lc0SW0dV403Q3D3abhARXhK_sfhrPWZye6VE1K44j8MErQVc"
                width={320}
                height={320}
                className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(244,188,6,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

