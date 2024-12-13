import Form from "@/core/classes/form";
import SubscriptionModel from "./SubscriptionModel";
import type { SubscriptionForm as SubscriptionFormInterface } from "../interfaces/SubscriptionForm";

export default class SubscriptionForm extends Form<SubscriptionFormInterface> {
  constructor() {
    super(new SubscriptionModel());

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

  submit() {
    console.log("Form submitted", this.model);
  }
}
