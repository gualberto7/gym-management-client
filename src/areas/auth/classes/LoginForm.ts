import Form from "@/core/classes/form";
import LoginModel from "./LoginModel";
import type { LoginInterface } from "../interfaces/forms";

export default class LoginForm extends Form<LoginInterface> {
    constructor() {
        super(new LoginModel());

        this.rules = {
            email: 'required|email',
            password: 'required|min:6'
        }

        this.labels = {
            email: 'Correo electrónico',
            password: 'Contraseña'
        }
    }
}