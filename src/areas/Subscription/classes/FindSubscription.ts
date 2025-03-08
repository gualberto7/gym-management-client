import Search from "@/core/classes/search";

export default class FindSubscription extends Search {
  constructor(gymId: number) {
    super(`api/gym/${gymId}/subscriptions/member`, "");

    this.placeholder = "Buscar usuario por CI...";
    this.addModelAsParam = true;
    this.live = false;
  }

  async submit() {
    //
  }
}
