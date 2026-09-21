export function ToolHero({ title, lead }: { title: string; lead: string }) {
  return (
    <section className="container tool-hero" aria-labelledby="tool-title" data-reveal>
      <h1 id="tool-title" className="tool-hero__title serif">
        {title}
      </h1>
      <p className="tool-hero__lead">{lead}</p>
    </section>
  );
}
