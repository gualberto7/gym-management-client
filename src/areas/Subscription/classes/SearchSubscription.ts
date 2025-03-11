import Search from "@/core/classes/search";

export default class SearchSubscription extends Search {
  constructor(gymId: number) {
    super(`api/gym/${gymId}/subscriptions`, "");

    this.filters = ["member.name"];
    this.placeholder = "Buscar por nombre...";
    this.live = true;
  }

  async submit() {
    //
  }
}
