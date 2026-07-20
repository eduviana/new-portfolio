import { SectionTitle } from "../section-title/SectionTitle";
import { TextSectionProps } from "./TextSection.types";

export const TextSection = ({ title, paragraphs }: TextSectionProps) => {
  return (
    <section>
      <div className="flex flex-col gap-12">
        <SectionTitle title={title} />
        <div className="flex flex-col gap-6 text-text-muted leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i} className="m-0 text-base">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
