import { toast } from "vue3-toastify";
import Form from "@/core/classes/form";
import MemberModel from "./MemberModel";
import { useAppStore } from "@/core/store";
import { events } from "@/core/store/eventBus";
import type { CreateMember } from "../interfaces/Member";

class MemberForm extends Form<CreateMember> {
  private appStore: any;
  constructor() {
    super(new MemberModel());

    this.appStore = useAppStore();

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
    const { data } = await this.submitForm("/api/members");
    toast.success("Usuario creado exitosamente");
    this.appStore.event.emit(events.MEMBER_CREATED, data);
    this.appStore.modal.hide();
  }
}

export default MemberForm;
