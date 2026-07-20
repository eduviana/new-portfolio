import { MetricCards } from "../metric-cards/MetricCards";
import { TextSection } from "../text-section/TextSection";
import { FeaturesSection } from "../features-section/FeaturesSection";
import { EngineeringSection } from "../engineering-section/EngineeringSection";
import { QualitySection } from "../quality-section/QualitySection";
import { ProjectContentProps } from "./ProjectContent.types";

export const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <div className="flex flex-col gap-[3rem] md:gap-[6rem]">
      <MetricCards cards={project.metrics} />
      <TextSection title="Visión general" paragraphs={project.intro} />
      <FeaturesSection title="Funcionalidades principales" items={project.features} />
      <EngineeringSection title="Decisiones de ingeniería" items={project.engineering} />
      <TextSection title="Arquitectura" paragraphs={project.architecture} />
      <QualitySection
        title="Calidad y mantenibilidad"
        intro="Además de cubrir los requisitos funcionales, el proyecto incorpora prácticas orientadas a facilitar su evolución, mantenibilidad y confiabilidad a largo plazo."
        tags={project.quality}
      />
    </div>
  );
};
