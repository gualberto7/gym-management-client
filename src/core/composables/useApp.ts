import { useSessionStore } from '@/areas/auth/store/sessionStore';
import api from '@/core/api';
import { useRouter } from 'vue-router';

export const useApp = () => {

    const sessionStore = useSessionStore();
    const router = useRouter();
  
    const getAuthenticatedUser = async () => {
      try {
        const { data } = await api.get('api/user');
        sessionStore.setUser(data);
        return data;
      } catch (error) {
        router.push({ name: 'login' });
      }
    };

  return {
    getAuthenticatedUser
  }
}