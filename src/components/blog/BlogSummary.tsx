import { Icon } from "@/components/Icon";

export function BlogSummary({ text }: { text: string }) {
  return (
    <div className="blog-summary">
      <span className="blog-summary__badge">
        <Icon name="sparkles" /> Yapay zekâ ile özetlendi
      </span>
      <p>{text}</p>
    </div>
  );
}
