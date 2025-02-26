import Search from "@/core/classes/search";

export default class FindSubscription extends Search {
  constructor() {
    super("api/subscribed-members", "");

    this.placeholder = "Buscar usuario por CI...";
    this.addModelAsParam = true;
    this.live = false;
  }

  async submit() {
    //
  }
}
