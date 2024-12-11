import Form from "@/core/classes/form";
import LoginModel from "./LoginModel";
import type { LoginInterface } from "../interfaces/forms";
import { useRouter } from "vue-router";
import { useApp } from "@/core/composables/useApp";

export default class LoginForm extends Form<LoginInterface> {
  private router: any;
  private useAppStore: any;
  constructor() {
    super(new LoginModel());

    this.router = useRouter();
    this.useAppStore = useApp();

    this.rules = {
      email: "required|email",
      password: "required",
    };

    this.labels = {
      email: "Correo electrónico",
      password: "Contraseña",
    };
  }

  async submit() {
    const response = await this.submitForm("login");
    if (response) {
      await this.useAppStore.getAuthenticatedUser();
      this.router.push({ name: "home" });
    }
  }
}
