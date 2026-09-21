import Link from "next/link";
import { Icon } from "@/components/Icon";

export function BlogProductCallout({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="blog-product-callout">
      <span className="blog-product-callout__icon">
        <Icon name="sparkles" />
      </span>
      <span>
        <span className="blog-product-callout__eyebrow">balinaOS'ta bununla ilgili</span>
        <span className="blog-product-callout__label">{label}</span>
      </span>
      <Icon name="arrow-right" className="blog-product-callout__arrow" />
    </Link>
  );
}
