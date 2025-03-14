import type { DurationUnit, Membership } from "../interfaces/Membership";

export default class MembershipModel {
  name: string;
  price: number | null;
  duration: number | null;
  duration_unit: DurationUnit;
  max_checkins?: number | null;
  description?: string;
  active: boolean;

  constructor() {
    this.name = "";
    this.price = null;
    this.duration = null;
    this.duration_unit = "day";
    this.max_checkins = null;
    this.description = "";
    this.active = true;
  }
}
