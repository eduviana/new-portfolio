import { SectionTitle } from "../section-title/SectionTitle";
import { QualitySectionProps } from "./QualitySection.types";

export const QualitySection = ({ title, intro, tags }: QualitySectionProps) => {
  return (
    <section>
      <div className="flex flex-col gap-12">
        <SectionTitle title={title} />
        <div className="flex flex-col gap-8">
          <p className="m-0 text-base text-text-muted">
            {intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-3 bg-zinc-800/50 p-3 rounded-lg border border-white/5"
              >
                <svg
                  className="text-brand-primary shrink-0"
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-xs text-white">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
