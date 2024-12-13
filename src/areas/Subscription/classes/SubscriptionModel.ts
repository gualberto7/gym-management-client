export default class SubscriptionModel {
  start_date: string;
  end_date: string;
  member_id: number;
  membership_id: number;
  gym_id: number;

  constructor() {
    this.start_date = "";
    this.end_date = "";
    this.member_id = 0;
    this.membership_id = 0;
    this.gym_id = 0;
  }
}
