export default class SubscriptionModel {
  start_date: string;
  end_date: string;
  member_id: number;
  member_name: string;
  gym_id: number;

  constructor() {
    this.start_date = "";
    this.end_date = "";
    this.member_id = 0;
    this.member_name = "";
    this.gym_id = 0;
  }
}
