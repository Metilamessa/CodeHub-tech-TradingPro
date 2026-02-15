import Link from "next/link";

export function MarketsFooter() {
  return (
    <footer className="mt-20 bg-background-dark border-t border-border-dark pt-16 pb-8">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-black font-bold text-xl">
                  candlestick_chart
                </span>
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                TRADEPRO
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mb-6">
              TradePro provides institutional-grade trading infrastructure,
              offering high-liquidity execution across multiple asset classes
              with enterprise security.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-custom bg-card-dark border border-border-dark flex items-center justify-center hover:border-primary transition-colors"
              >
                <span className="material-symbols-outlined text-lg">public</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-custom bg-card-dark border border-border-dark flex items-center justify-center hover:border-primary transition-colors"
              >
                <span className="material-symbols-outlined text-lg">terminal</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Exchange</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
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
                  Liquidity
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  API Docs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Market Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/institutional"
                  className="hover:text-primary transition-colors"
                >
                  Institutional
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Terminal Hub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>
                <Link
                  href="/help-center"
                  className="hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  System Status
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Security
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
        </div>
        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-xs text-text-secondary font-medium">
            <span>© 2024 TradePro Institutional LLC</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-positive animate-pulse"></span>
              <span className="text-white">All Systems Operational</span>
            </div>
          </div>
          <div className="flex items-center gap-8 text-xs text-text-secondary">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">lock</span> 256-bit AES
              Encryption
            </span>
            <span className="flex items-center gap-1 font-mono">LATENCY: 0.12ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}



