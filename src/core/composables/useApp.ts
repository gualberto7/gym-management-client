import api from "@/core/api";
import { useRouter } from "vue-router";
import { useAppStore } from "../store";

export const useApp = () => {
  const { user, gym } = useAppStore();
  const router = useRouter();

  const getAuthenticatedUser = async () => {
    try {
      const response = await api.get("api/user");
      const { data } = await api.get("api/gyms");
      user.setUser(response.data);
      gym.setGyms(data);
      return true;
    } catch (error) {
      router.push({ name: "login" });
    }
  };

  return {
    getAuthenticatedUser,
  };
};
