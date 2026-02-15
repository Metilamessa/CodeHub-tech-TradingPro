import Link from "next/link";

export function ComplianceHeader() {
  const navItems = [
    { label: "Institutional", href: "/institutional" },
    { label: "Exchange", href: "/" },
    { label: "Compliance", href: "/compliance" },
    { label: "Developers", href: "#" },
    { label: "Company", href: "/company" },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border-dark bg-background-dark/90 backdrop-blur-md px-6 py-4 lg:px-10">
      <div className="flex items-center gap-4 text-white">
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
        <Link href="/" className="text-xl font-bold leading-tight tracking-tight">
          TradePro
        </Link>
      </div>
      <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-9">
          {navItems.map((item) => {
            const isActive = item.label === "Compliance";
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-0.5"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-yellow-500 transition-colors text-background-dark text-sm font-bold">
          Access Registry
        </button>
      </div>
    </header>
  );
}





