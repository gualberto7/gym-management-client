import Form from "@/core/classes/form";
import MembershipModel from "./MembershipModel";
import { useGymStore } from "@/areas/gym/store/gymStore";
import type { Membership } from "../interfaces/Membership";
import type { GymStore } from "@/areas/gym/interfaces/GymStore";

export default class MembershipForm extends Form<Membership> {
  private gymStore: GymStore;
  constructor(membership: Membership = new MembershipModel()) {
    super(membership);
    this.gymStore = useGymStore();

    this.rules = {
      name: "required|string",
      price: "required",
      duration: "required",
      duration_unit: "required",
    };

    this.labels = {
      name: "Nombre",
      price: "Precio",
      duration: "Duración",
      duration_unit: "Unidad de duración",
      max_checkins: "Máximo de ingresos?",
      description: "Descripción",
      active: "Activo",
    };
  }

  async submit() {
    const { data } = await this.submitForm(
      `api/gym/${this.gymStore.currentGym.id}/memberships`
    );
  }
}
