class EntryModel {
  member_id: string;
  gym_id: number;
  registred_by: string;

  constructor() {
    this.member_id = "";
    this.gym_id = 0;
    this.registred_by = "";
  }
}

export default EntryModel;
