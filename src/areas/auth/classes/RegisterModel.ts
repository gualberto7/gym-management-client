export default class RegisterModel {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;

    constructor(data: any = {}) {
        this.name = data.name || '';
        this.email = data.email || '';
        this.password = data.password || '';
        this.password_confirmation = data.password_confirmation || '';
    }
}