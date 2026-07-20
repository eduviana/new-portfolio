export interface FeatureItem {
  title: string;
  description: string;
  list: string[];
}

export interface FeaturesSectionProps {
  title: string;
  items: FeatureItem[];
}
