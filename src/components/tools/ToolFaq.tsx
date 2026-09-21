import { Icon } from "@/components/Icon";

export type ToolFaqItem = { q: string; a: string };

export function ToolFaq({ items }: { items: ToolFaqItem[] }) {
  return (
    <section className="container faq" aria-labelledby="tool-faq-title">
      <div className="faq__grid">
        <div data-reveal>
          <h2 id="tool-faq-title" className="faq__title serif">
            Sıkça sorulan sorular
          </h2>
        </div>
        <div className="faq__list" data-reveal>
          {items.map((f) => (
            <details key={f.q} name="tool-faq">
              <summary>
                <h3 style={{ fontSize: "inherit", fontWeight: 400 }}>{f.q}</h3>
                <Icon name="chevron-down" />
              </summary>
              <div className="faq__answer">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
