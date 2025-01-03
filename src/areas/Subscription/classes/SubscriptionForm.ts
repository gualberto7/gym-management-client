import Form from "@/core/classes/form";
import SubscriptionModel from "./SubscriptionModel";
import type { SubscriptionForm as SubscriptionFormInterface } from "../interfaces/SubscriptionForm";
import { useGymStore } from "@/areas/gym/store/gymStore";

export default class SubscriptionForm extends Form<SubscriptionFormInterface> {
  gymStore: any;
  constructor() {
    super(new SubscriptionModel());

    this.gymStore = useGymStore();
    this.model.gym_id = this.gymStore.currentGym.id;

    this.rules = {
      start_date: "required",
      end_date: "required",
      member_id: "required",
      membership_id: "required",
      gym_id: "required",
    };

    this.labels = {
      start_date: "Fecha de inicio",
      end_date: "Fecha de fin",
      member_id: "Miembro",
      membership_id: "Membresía",
      gym_id: "Gimnasio",
    };
  }

  async submit() {
    //const response = await this.exec();
    await this.submitForm("/api/subscribed-members");
  }

  reset() {
    this.model.start_date = "";
    this.model.end_date = "";
    this.model.member_id = 0;
    this.model.membership_id = 0;
  }
}
