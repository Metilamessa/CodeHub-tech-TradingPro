"use client";

import Link from "next/link";

export function SupportHeader() {
  return (
    <header className="border-b border-gray-200 dark:border-border-dark bg-white dark:bg-background-dark sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">database</span>
            </div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              TradePro
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Exchange
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Markets
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Trade
            </Link>
            <Link
              href="/help-center"
              className="text-sm font-medium text-primary"
            >
              Support
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#929aa5] text-xl">
              search
            </span>
            <input
              className="bg-gray-100 dark:bg-card-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:ring-1 focus:ring-primary"
              placeholder="Search articles..."
              type="text"
            />
          </div>
          <Link
            href="/login"
            className="bg-primary text-black px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}



