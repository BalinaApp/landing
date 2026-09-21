import Link from "next/link";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export type Crumb = { label: string; href?: string };

/** Placed just above the footer rather than under the header — same information, quieter spot. */
export function ToolBreadcrumb({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="tool-breadcrumb-band">
        <nav className="container tool-breadcrumb" aria-label="Breadcrumb">
          <ol>
            {items.map((item, i) => {
              const isLast = i === items.length - 1;
              return (
                <li key={item.label}>
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
                  )}
                  {!isLast && <Icon name="chevron-right" className="tool-breadcrumb__sep" />}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </>
  );
}
