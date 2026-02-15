import Link from "next/link";

interface Article {
  title: string;
  href?: string;
}

export function PromotedArticles() {
  const articles: Article[] = [
    {
      title: "How to secure your account with Hardware 2FA keys",
    },
    {
      title: "Understanding Liquidation and Maintenance Margin",
    },
    {
      title: "Managing Sub-Accounts for Institutional Clients",
    },
    {
      title: "A step-by-step guide to verifying your Identity (KYC Level 2)",
    },
  ];

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Promoted Articles</h3>
        <Link
          href="#"
          className="text-primary text-sm font-semibold hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.href || "#"}
            className="group block bg-surface-dark/50 border border-border-dark p-5 rounded-lg article-hover transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gray-500">
                  description
                </span>
                <span className="font-medium">{article.title}</span>
              </div>
              <span className="material-symbols-outlined text-gray-600 group-hover:text-primary">
                chevron_right
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}



