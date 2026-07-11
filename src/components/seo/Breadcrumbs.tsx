import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, type BreadcrumbCrumb } from "@/lib/seo/schema";

type BreadcrumbsProps = {
  items: readonly BreadcrumbCrumb[];
  className?: string;
};

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  const schema = buildBreadcrumbSchema(items);

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <nav aria-label="Breadcrumb" className={`seo-breadcrumbs ${className}`.trim()}>
        <ol className="seo-breadcrumbs-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.path}-${index}`} className="seo-breadcrumbs-item">
                {index > 0 ? (
                  <ChevronRight className="seo-breadcrumbs-sep h-3.5 w-3.5 shrink-0" aria-hidden />
                ) : null}
                {isLast ? (
                  <span className="seo-breadcrumbs-current" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="seo-breadcrumbs-link">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
