import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { storyData } from "@/components/Sections";

function customerPoster(id: string) {
  const exts = ["jpg", "webp", "png"];
  const ext = exts.find((e) => existsSync(join(process.cwd(), "public", "customers", `${id}.${e}`)));
  return ext ? `/customers/${id}.${ext}` : undefined;
}

export function IntegrationTestimonial({ storyId }: { storyId: string }) {
  const story = storyData.find((s) => s.id === storyId) ?? storyData[0];
  const poster = customerPoster(story.id);

  return (
    <section className="dark integ-testimonial" aria-label="Müşteri hikayesi">
      <div className="container integ-testimonial__inner" data-reveal>
        {poster && <Image className="integ-testimonial__avatar" src={poster} alt="" width={72} height={72} />}
        <p className="integ-testimonial__quote serif">&ldquo;{story.quote}&rdquo;</p>
        <p className="integ-testimonial__author">{story.author}</p>
      </div>
    </section>
  );
}
