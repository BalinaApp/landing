import { Icon } from "@/components/Icon";
import type { IntegrationPage } from "@/lib/integrationPages";

export function IntegrationCompareTable({ page }: { page: IntegrationPage }) {
  return (
    <section className="container integ-compare" aria-labelledby="integ-compare-title" data-reveal>
      <h2 id="integ-compare-title" className="integ-compare__title serif">
        {page.compareTitle}
      </h2>

      <div className="integ-compare__table" role="table">
        <div className="integ-compare__head" role="row">
          <span role="columnheader" />
          <span role="columnheader">balinaOS ile</span>
          <span role="columnheader">Manuel yöntemle</span>
        </div>
        {page.compareRows.map((row) => (
          <div key={row.label} className="integ-compare__row" role="row">
            <span className="integ-compare__label" role="cell">
              {row.label}
            </span>
            <span className="integ-compare__cell integ-compare__cell--yes" role="cell">
              <Icon name="check" /> {row.withUs}
            </span>
            <span className="integ-compare__cell integ-compare__cell--no" role="cell">
              <Icon name="x" /> {row.withoutUs}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
