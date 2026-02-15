import Image from "next/image";

export function HelpCenterSidebar() {
  return (
    <aside className="w-full lg:w-72">
      <div className="sticky top-28 space-y-8">
        <div>
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
            Top Categories
          </h4>
          <nav className="flex flex-col gap-1">
            <a
              href="#"
              className="px-4 py-2 rounded-lg text-primary bg-primary/10 font-medium"
            >
              Account Access
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg hover:bg-surface-dark transition-colors"
            >
              Trading Fees
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg hover:bg-surface-dark transition-colors"
            >
              Spot Trading
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg hover:bg-surface-dark transition-colors"
            >
              Futures & Perpetual
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg hover:bg-surface-dark transition-colors"
            >
              API Keys
            </a>
          </nav>
        </div>
        <div className="p-6 bg-surface-dark rounded-xl border border-border-dark">
          <h4 className="font-bold mb-2">Need live support?</h4>
          <p className="text-gray-400 text-sm mb-4">
            Our dedicated pro-support team is available 24/7 for account-specific
            queries.
          </p>
          <button className="w-full py-2 bg-primary/10 text-primary border border-primary/20 font-bold rounded-lg hover:bg-primary/20 transition-colors">
            Chat with Agent
          </button>
        </div>
        <div>
          <Image
            className="w-full h-32 object-cover rounded-xl border border-border-dark"
            alt="Abstract golden lines on dark background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbpVvk0cKZ5cDlDPw010NR7PvZJfPKMJ_8mY2DCTXK20iAP6AQaNRtDrJyyCG2gxvUgSPZl1CLSI7qKl2oEp6wzzuOwKIjnOXgnpT-6P32RY38n85YYUNG26E2NwPiZxaHB1rSUy2EI6vgKDZS7fQ9WxU7qv7d6kImtwOqWPieFG2CCZZnwg5lYgc-uC_UrxFi_ZFOFV2X6EaW8elYOKLjeMZ0IYuugeszwuTczYNM_zv_DnUOmMu5e6zxWSByBDIJIk9hlW7Fvn0"
            width={288}
            height={128}
          />
          <div className="mt-4">
            <h4 className="font-bold text-sm">Join the Community</h4>
            <p className="text-xs text-gray-500 mt-1">
              Connect with 50k+ traders on our Discord server.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}



