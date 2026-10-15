export interface EngineeringItem {
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface EngineeringSectionProps {
  title: string;
  items: EngineeringItem[];
}
