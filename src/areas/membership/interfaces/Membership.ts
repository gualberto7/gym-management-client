export interface Membership {
  id: number;
  name: string;
  price: number;
  duration: number;
  duration_unit: DurationUnit;
  max_checkins?: number;
  description?: string;
  active: boolean;
  created_by: string;
  updated_by: string;
  created_at: Date;
  updated_at: Date;
}

type DurationUnit = "day" | "week" | "month" | "year";
