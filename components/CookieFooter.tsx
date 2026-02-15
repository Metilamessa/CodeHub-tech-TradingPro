import Link from "next/link";

export function CookieFooter() {
  return (
    <footer className="bg-[#050608] border-t border-border-dark pt-16 pb-12 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 text-white mb-6">
              <div className="size-6 text-primary">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold">TradePro</h2>
            </div>
            <p className="text-[#848e9c] text-sm leading-relaxed max-w-xs">
              The institutional standard for digital asset trading. Regulated,
              secure, and built for high-frequency execution.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Platform
            </h4>
            <Link
              href="#"
              className="text-[#848e9c] hover:text-primary text-sm transition-colors"
            >
              Exchange
            </Link>
            <Link
              href="/institutional"
              className="text-[#848e9c] hover:text-primary text-sm transition-colors"
            >
              Institutional
            </Link>
            <Link
              href="#"
              className="text-[#848e9c] hover:text-primary text-sm transition-colors"
            >
              Derivatives
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Legal
            </h4>
            <Link
              href="/legal"
              className="text-[#848e9c] hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/company"
              className="text-[#848e9c] hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal-cookies"
              className="text-primary text-sm font-semibold"
            >
              Cookie Policy
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Company
            </h4>
            <Link
              href="#"
              className="text-[#848e9c] hover:text-primary text-sm transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-[#848e9c] hover:text-primary text-sm transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#848e9c] text-xs">
            © 2023 TradePro Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}



