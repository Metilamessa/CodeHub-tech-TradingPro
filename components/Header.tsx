import Link from "next/link";

interface HeaderProps {
  activeLink?: string;
}

export function Header({ activeLink }: HeaderProps = {}) {
  const navItems = [
    { label: "Exchange", href: "/" },
    { label: "Markets", href: "/markets" },
    { label: "Derivatives", href: "#" },
    { label: "Earn", href: "#" },
    { label: "Institutional", href: "/institutional" },
    { label: "Legal & Compliance", href: "/legal-compliance" },
    { label: "Company", href: "/company" },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-[#2b3139] bg-[#0b0e11]/80 backdrop-blur-md px-6 py-4 lg:px-10">
      <div className="flex items-center gap-4 text-white shrink-0">
        <Link href="/" className="size-8 text-primary">
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
        </Link>
        <Link href="/" className="text-white text-xl font-bold leading-tight tracking-tight whitespace-nowrap">
          TradePro
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-4 lg:gap-8 items-center min-w-0">
        <nav className="flex items-center gap-4 lg:gap-6 xl:gap-9 overflow-x-auto hide-scrollbar">
          {navItems.map((item) => {
            const isActive = activeLink === item.label.toLowerCase();
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium leading-normal transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? "text-white font-semibold border-b-2 border-primary pb-0.5"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/login"
            className="text-sm font-bold text-gray-400 hover:text-white px-4 transition-colors whitespace-nowrap"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 lg:px-6 bg-primary hover:bg-yellow-500 transition-colors text-[#0b0e11] text-sm font-bold whitespace-nowrap"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}


