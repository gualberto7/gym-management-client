import { toast } from "vue3-toastify";
import Form from "@/core/classes/form";
import ChenkisModel from "./ChenkisModel";
import type { CreateChenkis } from "../interfaces/createChenkis";

class ChenkisForm extends Form<CreateChenkis> {
  constructor() {
    super(new ChenkisModel());

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
    this.model.member_id = 0;
    this.model.gym_id = 0;
    this.model.registred_by = "";
  }
}

export default ChenkisForm;
