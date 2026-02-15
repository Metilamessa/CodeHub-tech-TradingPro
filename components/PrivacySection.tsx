import { ReactNode } from "react";

interface PrivacySectionProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function PrivacySection({
  id,
  number,
  title,
  children,
  className = "",
}: PrivacySectionProps) {
  return (
    <section id={id} className={className}>
      <h2 className="text-white text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
        <span className="text-primary font-mono text-lg">{number}.</span> {title}
      </h2>
      {children}
    </section>
  );
}

