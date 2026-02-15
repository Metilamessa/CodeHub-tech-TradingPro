import { ReactNode } from "react";

interface AMLSectionProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function AMLSection({
  id,
  number,
  title,
  children,
  className = "",
}: AMLSectionProps) {
  return (
    <section id={id} className={`policy-container ${className}`}>
      <h3 className="!mt-0">
        {number}. {title}
      </h3>
      {children}
    </section>
  );
}

