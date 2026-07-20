import { MetricCard } from "@/app/components/project-content/metric-cards/MetricCards.types";
import { FeatureItem } from "@/app/components/project-content/features-section/FeaturesSection.types";
import { EngineeringItem } from "@/app/components/project-content/engineering-section/EngineeringSection.types";

export type Project = {
  id: number;
  title: string;
  slug: string;
  liveSiteUrl?: string;
  githubUrl: string;
  desc: string;
  technologies: string[];
  categories: string[];
  thumbnail: string;
  images: string[];
  video?: string;
  metrics: MetricCard[];
  intro: string[];
  features: FeatureItem[];
  engineering: EngineeringItem[];
  architecture: string[];
  quality: string[];
};
