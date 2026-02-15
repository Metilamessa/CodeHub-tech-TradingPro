import Link from "next/link";

export function ComplianceFooter() {
  return (
    <footer className="bg-[#050608] border-t border-border-dark pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
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
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Setting the institutional benchmark for compliance and digital
              asset security. Trusted by the world's leading financial entities.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Company
            </h4>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Careers
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Legal
            </h4>
            <Link
              href="/compliance"
              className="text-primary font-bold text-sm"
            >
              Regulatory Licenses
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/company"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Resources
            </h4>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              API Status
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Help Center
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Audit Log
            </Link>
          </div>
        </div>
        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>
            © 2024 TradePro Institutional Services. Global Compliance Division.
          </p>
          <div className="flex gap-6">
            <span>Cookie Settings</span>
            <span>System Status: Fully Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}





