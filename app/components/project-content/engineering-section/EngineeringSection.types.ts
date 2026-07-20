export interface EngineeringItem {
  title: string;
  paragraphs: string[];
}

export interface EngineeringSectionProps {
  title: string;
  items: EngineeringItem[];
}
