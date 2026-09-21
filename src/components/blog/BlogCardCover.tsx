import Image from "next/image";
import { blogThemes } from "./BlogCover";

export function BlogCardCover({ category }: { category: string }) {
  const theme = blogThemes[category] ?? blogThemes.Pazaryerleri;
  return (
    <div className="blog-card__cover">
      <span className="blog-card__cover-brand">balinaOS</span>
      <Image className="blog-card__cover-deco" src={theme.illustration} alt="" width={theme.w} height={theme.h} />
    </div>
  );
}
