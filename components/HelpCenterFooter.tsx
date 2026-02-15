import Link from "next/link";

export function HelpCenterFooter() {
  return (
    <footer className="border-t border-border-dark py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 grayscale opacity-50">
          <div className="size-6 text-white">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
            </svg>
          </div>
          <span className="font-bold">TradePro</span>
        </div>
        <div className="flex gap-8 text-sm text-gray-500">
          <Link
            href="#"
            className="hover:text-white transition-colors"
          >
            System Status
          </Link>
          <Link
            href="/company"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/legal"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/legal-cookies"
            className="hover:text-white transition-colors"
          >
            Cookies
          </Link>
        </div>
        <p className="text-sm text-gray-600">© 2024 TradePro Exchange Inc.</p>
      </div>
    </footer>
  );
}



