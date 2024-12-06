import Form from "@/core/classes/form";
import RegisterModel from "./RegisterModel";
import type { RegisterInterface } from "../interfaces/forms";

export default class RegisterForm extends Form<RegisterInterface> { 
    constructor() {
        super(new RegisterModel());

        this.rules = {
            name: 'required',
            email: 'required|email',
            password: 'required|min:6',
            password_confirmation: 'required|same:password'
        }

        this.labels = {
            name: 'Nombre',
            email: 'Correo electrónico',
            password: 'Contraseña',
            password_confirmation: 'Confirmar contraseña'
        }
    }

    submit () {
        console.log('Form submitted', this.model);
    }
}