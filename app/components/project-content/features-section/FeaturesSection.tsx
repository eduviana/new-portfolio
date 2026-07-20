import { SectionTitle } from "../section-title/SectionTitle";
import { FeaturesSectionProps } from "./FeaturesSection.types";

export const FeaturesSection = ({ title, items }: FeaturesSectionProps) => {
  return (
    <section>
      <div className="flex flex-col gap-12">
        <SectionTitle title={title} />
        <div className="flex flex-col gap-[6rem]">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-6">
              <h4 className="text-xl font-bold text-white">
                {item.title}
              </h4>
              <p className="m-0 text-base text-text-muted">
                {item.description}
              </p>
              <ul className="flex flex-col gap-3 text-base text-text-muted">
                {item.list.map((li, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-brand-primary">–</span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
