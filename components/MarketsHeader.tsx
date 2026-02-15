import Link from "next/link";

export function MarketsHeader() {
  return (
    <header className="sticky top-0 z-[100] glass-header border-b border-border-dark">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-black font-bold text-xl">
                candlestick_chart
              </span>
            </div>
            <Link href="/" className="text-xl font-black tracking-tighter text-white">
              TRADEPRO
            </Link>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors"
            >
              Exchange
            </Link>
            <Link
              href="/markets"
              className="text-sm font-semibold text-primary"
            >
              Markets
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors"
            >
              Derivatives
            </Link>
            <Link
              href="/institutional"
              className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors"
            >
              Institutional
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-bold text-text-secondary hover:text-white px-4 transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="rounded-custom bg-primary px-6 py-2 text-sm font-bold text-black transition hover:bg-primary-hover shadow-lg shadow-primary/10"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}



