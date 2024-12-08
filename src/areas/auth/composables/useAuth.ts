import { useRouter } from 'vue-router';
import * as authService from '../services/auth'

export const useAuth = () => {

    const router = useRouter();

    const login = async (credentials: object) => {
        try {
            await authService.login(credentials);
            router.push({ name: 'dashboard' });
        } catch (error) {
            console.error(error);
        }
    }

    const logout = async () => {
        try {
            await authService.logout();
            router.push({ name: 'login' });
        } catch (error) {
            console.error(error);
        }
    };

    return {
        login,
        logout
    }
}