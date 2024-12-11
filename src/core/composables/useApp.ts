import api from "@/core/api";
import { useRouter } from "vue-router";
import { useAppStore } from "../store";

export const useApp = () => {
  const { user, gym } = useAppStore();
  const router = useRouter();

  const getAuthenticatedUser = async () => {
    try {
      const { data } = await api.get("api/user");
      const response = await api.get("api/gyms");
      user.setUser(data);
      gym.setGyms(response.data);
      console.log(data, response.data);
      return true;
    } catch (error) {
      router.push({ name: "login" });
    }
  };

  return {
    getAuthenticatedUser,
  };
};
