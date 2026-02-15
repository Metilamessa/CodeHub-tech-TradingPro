import Link from "next/link";

export function SupportBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm text-[#929aa5] mb-8">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-lg mr-1">home</span>
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <span className="material-symbols-outlined text-lg mx-1">chevron_right</span>
            <Link
              href="/help-center"
              className="hover:text-primary transition-colors"
            >
              Support Center
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <span className="material-symbols-outlined text-lg mx-1">chevron_right</span>
            <Link
              href="#"
              className="hover:text-primary transition-colors"
            >
              Account Security
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="material-symbols-outlined text-lg mx-1">chevron_right</span>
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              How to reset your 2FA authentication
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}



