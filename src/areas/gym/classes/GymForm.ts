import GymModel from "./GymModel";
import Form from "@/core/classes/form";
import type { Gym, GymForm as GymFormInterface } from "../interfaces/Gym";

export default class GymForm extends Form<GymFormInterface> {
  constructor() {
    super(new GymModel());

    this.rules = {
      name: "required|string",
      adress: "required|string",
      phone: "required|string",
      email: "email",
      website: "string",
    };

    this.labels = {
      name: "Nombre",
      adress: "Dirección",
      phone: "Teléfono",
      email: "Correo",
      website: "Sitio Web",
    };
  }

  public setInitialValues(gym: Gym) {
    this.setValue("id", gym.id);
    this.setValue("name", gym.name);
    this.setValue("adress", gym.address);
    this.setValue("phone", gym.phone);
    this.setValue("email", gym.email);
    this.setValue("website", gym.website);
  }
}
