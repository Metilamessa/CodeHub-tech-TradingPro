import Link from "next/link";

export function HelpCenterHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="size-8 text-primary">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight">
            TradePro <span className="text-primary font-medium">Support</span>
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
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
            Submit a Ticket
          </Link>
        </nav>
        <div className="flex gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-bold border border-border-dark rounded-lg hover:bg-white/5 transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:opacity-90 transition-opacity"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}



