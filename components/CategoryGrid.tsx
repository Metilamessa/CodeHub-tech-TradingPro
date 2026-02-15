import Link from "next/link";

interface Category {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export function CategoryGrid() {
  const categories: Category[] = [
    {
      icon: "rocket_launch",
      title: "Getting Started",
      description:
        "Everything you need to know about setting up your account and placing your first trade.",
    },
    {
      icon: "candlestick_chart",
      title: "Trading & Markets",
      description:
        "Execution strategies, advanced order types, leverage details, and margin requirements.",
    },
    {
      icon: "shield_lock",
      title: "Account Security",
      description:
        "Best practices for 2FA, password management, and securing your professional identity.",
    },
    {
      icon: "account_balance_wallet",
      title: "Funds & Limits",
      description:
        "Deposit options, withdrawal verification process, and institutional tier limits.",
    },
    {
      icon: "terminal",
      title: "API & Pro Tools",
      description:
        "REST and WebSockets integration for automated trading systems and developer tools.",
    },
    {
      icon: "gavel",
      title: "Legal & Compliance",
      description:
        "Terms of Service, Privacy Policy, and KYC requirements for different jurisdictions.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category, index) => (
        <Link
          key={index}
          href={category.href || "#"}
          className="group bg-surface-dark border border-border-dark p-6 rounded-lg hover:border-primary/50 transition-all cursor-pointer"
        >
          <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">
              {category.icon}
            </span>
          </div>
          <h4 className="text-lg font-bold mb-2">{category.title}</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            {category.description}
          </p>
        </Link>
      ))}
    </div>
  );
}



