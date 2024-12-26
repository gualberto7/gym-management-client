import Search from "@/core/classes/search";

export default class FindMember extends Search {
  constructor() {
    super("api/members/ci", "");

    this.placeholder = "Buscar por CI...";
    this.addModelAsParam = true;
    this.live = false;
  }
}
