import Image from "next/image";

export function GlobalPresence() {
  return (
    <section className="py-12 border-y border-border-dark bg-[#0d1115]">
      <div className="container mx-auto px-6">
        <div className="bg-surface-dark border border-border-dark rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 p-8 lg:p-12 border-r border-border-dark relative">
              <Image
                alt="Global Compliance Map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDykuwk0QVrZRy4alJZc89tOi3J5vAvGApDaPtFpoFWDnXA6o2QyjvyGX0RCJw9pCQ8FTf6rWycpwWPPgTYSbgwewOuji4c4M3YHzE7WdE8lNb_c5x_VrrIlRFCAlkC078PoB1xN6Jtar8h6eUJB2XMAqb1yXPskk7cyd6VQyqRDFxOOlN6g-BVAqR9K_xUfiOYQ6jTgNbnTjT6SUWHBD3GjppUE1PU742iUXpBFgcwRMAQv62EpkUEYQurBqLnzXx5T50VbKlfEt0"
                width={800}
                height={600}
                className="w-full h-auto opacity-40 hover:opacity-60 transition-opacity duration-700 rounded-xl"
              />
              <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_15px_#f4bc06]"></div>
              <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_15px_#f4bc06]"></div>
              <div className="absolute top-2/3 left-3/4 w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_15px_#f4bc06]"></div>
            </div>
            <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Global Presence</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-primary">12+</span>
                  <span className="text-gray-400 text-sm leading-tight uppercase font-semibold tracking-wider">
                    Active Regulatory
                    <br />
                    Licenses
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-white">50+</span>
                  <span className="text-gray-400 text-sm leading-tight uppercase font-semibold tracking-wider">
                    Jurisdictions
                    <br />
                    Served
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-white">100%</span>
                  <span className="text-gray-400 text-sm leading-tight uppercase font-semibold tracking-wider">
                    Compliance
                    <br />
                    Audit Pass Rate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





