import { SectionTitle } from "../section-title/SectionTitle";
import { EngineeringSectionProps } from "./EngineeringSection.types";

export const EngineeringSection = ({ title, items }: EngineeringSectionProps) => {
  return (
    <section>
      <div className="flex flex-col gap-12">
        <SectionTitle title={title} />
        <div className="flex flex-col gap-[6rem]">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-4 group">
              <h4 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
                {item.title}
              </h4>
              {item.paragraphs.map((p, j) => (
                <p key={j} className="m-0 text-base text-text-muted">
                  {p}
                </p>
              ))}
              {item.list && (
                <ul className="flex flex-col gap-3 text-base text-text-muted mt-2">
                  {item.list.map((li, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-brand-primary">–</span>
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
