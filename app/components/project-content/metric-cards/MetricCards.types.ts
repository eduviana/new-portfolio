export type MetricCardColor = "blue" | "green" | "purple" | "orange";

export interface MetricCard {
  value: string;
  label: string;
  color: MetricCardColor;
  icon: string;
}

export interface MetricCardsProps {
  cards: MetricCard[];
}
