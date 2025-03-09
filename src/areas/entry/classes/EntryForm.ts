import { toast } from "vue3-toastify";
import Form from "@/core/classes/form";
import EntryModel from "./EntryModel";
import type { CreateEntry } from "../interfaces/CreateEntry";

class EntryForm extends Form<CreateEntry> {
  constructor() {
    super(new EntryModel());

    this.rules = {
      member_id: "required",
      gym_id: "required",
    };

    this.labels = {
      member_id: "Miembro",
      gym_id: "Gimnasio",
    };
  }

  async submit() {
    await this.submitForm(`api/gym/${this.model.gym_id}/entries`);
    toast.success("Ingreso registrado exitosamente");
  }

  reset() {
    this.model.member_id = "";
    this.model.gym_id = 0;
    this.model.registred_by = "";
  }
}

export default EntryForm;
