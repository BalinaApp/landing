const tints = [
  "linear-gradient(135deg, #2a2a2a, #3d2a1a)",
  "linear-gradient(135deg, #2a2a2a, #1f2a3a)",
  "linear-gradient(135deg, #2a2a2a, #3a1f2a)",
  "linear-gradient(135deg, #2a2a2a, #1f2a2a)",
];

export function BlogStoryCover({ name, index }: { name: string; index: number }) {
  return (
    <div className="blog-story-card__cover" style={{ background: tints[index % tints.length] }}>
      <span className="blog-story-card__cover-eyebrow">Müşteri Hikayesi</span>
      <span className="blog-story-card__cover-brand">
        balinaOS <span className="blog-story-card__cover-x">×</span> {name}
      </span>
    </div>
  );
}
