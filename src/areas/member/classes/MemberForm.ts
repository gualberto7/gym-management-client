import Form from "@/core/classes/form";
import MemberModel from "./MemberModel";
import type { CreateMember } from "../interfaces/Member";
import { toast } from "vue3-toastify";

class MemberForm extends Form<CreateMember> {
  constructor() {
    super(new MemberModel());

    this.rules = {
      name: "required|string",
      ci: "required|string",
      phone: "required|string",
      email: "email",
    };

    this.labels = {
      name: "Nombre",
      ci: "Cédula de Identidad",
      phone: "Teléfono",
      email: "Correo",
    };
  }

  async submit() {
    await this.submitForm("/api/members");
    toast.success("Usuario creado exitosamente");
  }
}

export default MemberForm;
