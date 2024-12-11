export interface Membership {
  name: string;
  price: number;
  duration: number;
  duration_unit: DurationUnit;
  max_chenkis?: number;
  description?: string;
  gym_id: number;
}

type DurationUnit = "day" | "week" | "month" | "year";
