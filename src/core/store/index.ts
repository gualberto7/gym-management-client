import { defineStore } from "pinia";

import { useGymStore } from "@/areas/gym/store/gymStore";
import { useSessionStore } from "@/areas/auth/store/sessionStore";

export const useAppStore = defineStore("app", {
  state: () => ({
    user: useSessionStore(),
    gym: useGymStore(),
  }),
});
