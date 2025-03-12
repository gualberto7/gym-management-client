export default class GymModel {
  id?: string;
  name: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;

  constructor() {
    this.id = "";
    this.name = "";
    this.address = "";
    this.phone = "";
    this.email = "";
    this.website = "";
  }
}
