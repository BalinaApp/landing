import { Icon } from "@/components/Icon";
import type { IntegrationPage } from "@/lib/integrationPages";

export function IntegrationFeatureGrid({ page }: { page: IntegrationPage }) {
  return (
    <section className="container integ-features" aria-labelledby="integ-features-title" data-reveal>
      <h2 id="integ-features-title" className="integ-features__title serif">
        {page.featuresTitle}
      </h2>
      <p className="integ-features__lead">{page.featuresLead}</p>

      <div className="integ-features__grid">
        {page.features.map((f) => (
          <div key={f.title} className="integ-feature">
            <span className="integ-feature__icon">
              <Icon name={f.icon} />
            </span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
