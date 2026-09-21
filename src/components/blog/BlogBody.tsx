import { slugifyHeading, type BlogBlock } from "@/lib/blog";

export function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="blog-body">
      {blocks.map((b, i) => {
        if (b.type === "h2")
          return (
            <h2 key={i} id={slugifyHeading(b.text)}>
              {b.text}
            </h2>
          );
        if (b.type === "ul")
          return (
            <ul key={i}>
              {b.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        return <p key={i}>{b.text}</p>;
      })}
    </div>
  );
}
