import { useSessionStore } from '@/areas/auth/store/sessionStore';
import api from '@/core/api';

export const useApp = () => {

    const sessionStore = useSessionStore();
  
    const getAuthenticatedUser = async () => {
        const { data } = await api.get('api/user');
        sessionStore.setUser(data);
        return data;
    };

  return {
    getAuthenticatedUser
  }
}