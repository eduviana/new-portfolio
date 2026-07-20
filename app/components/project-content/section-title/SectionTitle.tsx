import { SectionTitleProps } from "./SectionTitle.types";

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent rounded-full"></span>
      <h3 className="text-2xl font-bold leading-none text-white m-0 shrink-0">
        {title}
      </h3>
      <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-brand-primary/40 to-transparent rounded-full"></span>
    </div>
  );
};
