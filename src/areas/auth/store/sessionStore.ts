import type { User } from "@/areas/user/interfaces/User";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useSessionStore = defineStore("session", () => {
  const user = ref<User | null>();

  const setUser = (newUser: User) => {
    user.value = newUser;
  };

  const isAuthenticated = computed(() => user.value !== null);

  return {
    user,
    setUser,
    isAuthenticated,
  };
});
