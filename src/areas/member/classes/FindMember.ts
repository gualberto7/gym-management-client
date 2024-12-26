import Search from "@/core/classes/search";

export default class FindMember extends Search {
  constructor() {
    super("api/members", "");

    this.placeholder = "Buscar por CI...";
    this.live = false;
  }
}
