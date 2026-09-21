import Image from "next/image";

export const blogThemes: Record<string, { illustration: string; w: number; h: number; tint: string }> = {
  Pazaryerleri: { illustration: "/illustrations/fish.png", w: 300, h: 99, tint: "linear-gradient(135deg, #2a2a2a, #3d2a1a)" },
  "Sosyal Ticaret": { illustration: "/illustrations/coral.webp", w: 200, h: 161, tint: "linear-gradient(135deg, #2a2a2a, #3a1f2a)" },
  "e-Fatura": { illustration: "/illustrations/pebble-cluster.png", w: 260, h: 117, tint: "linear-gradient(135deg, #2a2a2a, #2a1f3a)" },
  "Yapay Zeka": { illustration: "/illustrations/branch.png", w: 160, h: 269, tint: "linear-gradient(135deg, #2a2a2a, #1f2a3a)" },
  Kargo: { illustration: "/illustrations/coral.webp", w: 200, h: 161, tint: "linear-gradient(135deg, #2a2a2a, #3d2a1a)" },
  Strateji: { illustration: "/illustrations/pebble-cluster.png", w: 260, h: 117, tint: "linear-gradient(135deg, #2a2a2a, #1f2a2a)" },
  Operasyon: { illustration: "/illustrations/fish.png", w: 300, h: 99, tint: "linear-gradient(135deg, #2a2a2a, #1f2a1f)" },
};

export function BlogCover({ category }: { category: string }) {
  const theme = blogThemes[category] ?? blogThemes.Pazaryerleri;
  return (
    <div className="blog-cover" style={{ background: theme.tint }}>
      <span className="blog-cover__brand">balinaOS</span>
      <Image className="blog-cover__deco" src={theme.illustration} alt="" width={theme.w} height={theme.h} />
    </div>
  );
}
