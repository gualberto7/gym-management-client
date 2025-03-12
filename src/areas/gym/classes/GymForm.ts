import GymModel from "./GymModel";
import Form from "@/core/classes/form";
import type { Gym, GymForm as GymFormInterface } from "../interfaces/Gym";
import { useGymStore } from "../store/gymStore";
import { toast } from "vue3-toastify";
import type { GymStore } from "../interfaces/GymStore";

export default class GymForm extends Form<GymFormInterface> {
  private gymStore: GymStore;
  constructor() {
    super(new GymModel());

    this.gymStore = useGymStore();

    this.rules = {
      name: "required|string",
      address: "required|string",
      phone: "required|string",
      email: "email",
      website: "string",
    };

    this.labels = {
      name: "Nombre",
      address: "Dirección",
      phone: "Teléfono",
      email: "Correo",
      website: "Sitio Web",
    };
  }

  async submit() {
    const method = this.model.id ? "put" : "post";
    const { data } = await this.submitForm(`api/gyms/${this.model.id}`, method);
    this.gymStore.setCurrentGym(data);
    toast.success("Gimnasio guardado correctamente");
  }

  setInitialValues(gym: Gym) {
    this.setValue("id", gym.id);
    this.setValue("name", gym.name);
    this.setValue("address", gym.address);
    this.setValue("phone", gym.phone);
    this.setValue("email", gym.email);
    this.setValue("website", gym.website);
  }
}
