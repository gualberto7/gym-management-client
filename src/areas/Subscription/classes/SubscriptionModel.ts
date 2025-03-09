export default class SubscriptionModel {
  start_date: string;
  end_date: string;
  member_id: string;
  membership_id: number;

  constructor() {
    this.start_date = "";
    this.end_date = "";
    this.member_id = "";
    this.membership_id = 0;
  }
}
