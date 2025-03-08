class EntryModel {
  member_id: number;
  gym_id: number;
  registred_by: string;

  constructor() {
    this.member_id = 0;
    this.gym_id = 0;
    this.registred_by = "";
  }
}

export default EntryModel;
