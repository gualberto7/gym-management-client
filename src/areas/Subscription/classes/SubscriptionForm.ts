import Form from "@/core/classes/form";
import SubscriptionModel from "./SubscriptionModel";
import type { SubscriptionForm as SubscriptionFormInterface } from "../interfaces/SubscriptionForm";
import { useGymStore } from "@/areas/gym/store/gymStore";
import { toast } from "vue3-toastify";

export default class SubscriptionForm extends Form<SubscriptionFormInterface> {
  gymStore: any;
  constructor() {
    super(new SubscriptionModel());

    this.gymStore = useGymStore();

    this.rules = {
      start_date: "required",
      end_date: "required",
      membership_id: "required",
    };

    this.labels = {
      start_date: "Fecha de inicio",
      end_date: "Fecha de fin",
      membership_id: "Membresía",
    };
  }

  async submit() {
    await this.submitForm(
      `/api/gym/${this.gymStore.currentGym.id}/subscriptions`
    );
    toast.success("Subscripción creada exitosamente");
    this.reset();
  }

  reset() {
    this.model.start_date = "";
    this.model.end_date = "";
    this.model.member_id = "";
    this.model.membership_id = 0;
  }
}
