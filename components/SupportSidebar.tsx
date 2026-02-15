import Link from "next/link";

export function SupportSidebar() {
  return (
    <aside className="lg:col-span-4 space-y-6">
      <div className="hidden lg:block bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#929aa5]">
          In this article
        </h3>
        <ul className="space-y-3 text-sm border-l-2 border-gray-200 dark:border-border-dark pl-4">
          <li>
            <a
              className="block text-primary font-medium border-l-2 border-primary -ml-[18px] pl-4"
              href="#"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              className="block text-[#929aa5] hover:text-gray-900 dark:hover:text-white transition-colors"
              href="#"
            >
              Step 1: Access Security Settings
            </a>
          </li>
          <li>
            <a
              className="block text-[#929aa5] hover:text-gray-900 dark:hover:text-white transition-colors"
              href="#"
            >
              Step 2: Verify Identity
            </a>
          </li>
          <li>
            <a
              className="block text-[#929aa5] hover:text-gray-900 dark:hover:text-white transition-colors"
              href="#"
            >
              Step 3: Reset Google Authenticator
            </a>
          </li>
          <li>
            <a
              className="block text-[#929aa5] hover:text-gray-900 dark:hover:text-white transition-colors"
              href="#"
            >
              Common Issues
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-primary">bookmark</span>
          <h3 className="font-bold text-lg">Related Articles</h3>
        </div>
        <ul className="space-y-4">
          <li>
            <Link href="#" className="group block">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors mb-1">
                Setting up Yubikey for 2FA
              </p>
              <div className="flex items-center gap-2 text-xs text-[#929aa5]">
                <span className="material-symbols-outlined text-[14px]">article</span>
                <span>Guide</span>
              </div>
            </Link>
          </li>
          <hr className="border-gray-100 dark:border-border-dark" />
          <li>
            <Link href="#" className="group block">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors mb-1">
                How to whitelist withdrawal addresses
              </p>
              <div className="flex items-center gap-2 text-xs text-[#929aa5]">
                <span className="material-symbols-outlined text-[14px]">article</span>
                <span>Security</span>
              </div>
            </Link>
          </li>
          <hr className="border-gray-100 dark:border-border-dark" />
          <li>
            <Link href="#" className="group block">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors mb-1">
                Account verification tiers explained
              </p>
              <div className="flex items-center gap-2 text-xs text-[#929aa5]">
                <span className="material-symbols-outlined text-[14px]">article</span>
                <span>Account</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-gradient-to-br from-card-dark to-background-dark border border-primary/30 rounded-xl p-6 relative overflow-hidden">
        <div className="absolute -right-6 -top-6 size-24 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <h3 className="font-bold text-lg text-white mb-2">Still need help?</h3>
          <p className="text-sm text-[#929aa5] mb-6">
            If you couldn't find the answer you were looking for, our support
            team is here to assist you.
          </p>
          <button className="w-full bg-primary text-black font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">support_agent</span>
            Submit a Request
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Link
          href="#"
          className="px-3 py-1 bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-full text-xs text-[#929aa5] hover:text-primary hover:border-primary transition-colors"
        >
          Security
        </Link>
        <Link
          href="#"
          className="px-3 py-1 bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-full text-xs text-[#929aa5] hover:text-primary hover:border-primary transition-colors"
        >
          2FA
        </Link>
        <Link
          href="#"
          className="px-3 py-1 bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-full text-xs text-[#929aa5] hover:text-primary hover:border-primary transition-colors"
        >
          Login
        </Link>
        <Link
          href="#"
          className="px-3 py-1 bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-full text-xs text-[#929aa5] hover:text-primary hover:border-primary transition-colors"
        >
          Google Auth
        </Link>
      </div>
    </aside>
  );
}



