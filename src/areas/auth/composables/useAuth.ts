import { useRouter } from "vue-router";
import * as authService from "../services/auth";
import { useSessionStore } from "../store/sessionStore";

export const useAuth = () => {
  const router = useRouter();
  const { removeUser } = useSessionStore();

  const loadUser = async () => {
    try {
    } catch (error) {}
  };

  const logout = async () => {
    try {
      await authService.logout();
      removeUser();
      router.push({ name: "login" });
    } catch (error) {}
  };

  return {
    loadUser,
    logout,
  };
};
