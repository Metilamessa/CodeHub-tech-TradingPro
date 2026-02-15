import Link from "next/link";

export function SupportFooter() {
  return (
    <footer className="border-t border-gray-200 dark:border-border-dark py-12 bg-white dark:bg-card-dark mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">database</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">TradePro</h2>
          </div>
          <p className="text-[#929aa5] text-sm leading-relaxed">
            A professional-grade trading platform built for stability, security,
            and performance. Reach out for any assistance.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">
            Services
          </h4>
          <ul className="space-y-4 text-sm text-[#929aa5]">
            <li>
              <Link
                href="#"
                className="hover:text-primary transition-colors"
              >
                Spot Trading
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-primary transition-colors"
              >
                Margin Trading
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-primary transition-colors"
              >
                Derivatives
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-primary transition-colors"
              >
                API Docs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-4 text-sm text-[#929aa5]">
            <li>
              <Link
                href="#"
                className="hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-primary transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/legal"
                className="hover:text-primary transition-colors"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">
            Follow Us
          </h4>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="size-10 rounded-full border border-border-dark flex items-center justify-center hover:bg-primary hover:text-black transition-all"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </Link>
            <Link
              href="#"
              className="size-10 rounded-full border border-border-dark flex items-center justify-center hover:bg-primary hover:text-black transition-all"
            >
              <span className="material-symbols-outlined text-xl">public</span>
            </Link>
            <Link
              href="#"
              className="size-10 rounded-full border border-border-dark flex items-center justify-center hover:bg-primary hover:text-black transition-all"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 mt-12 pt-8 border-t border-gray-100 dark:border-border-dark text-center text-xs text-[#929aa5]">
        © 2024 TradePro Exchange Inc. All rights reserved.
      </div>
    </footer>
  );
}



