import { defineStore } from "pinia";

import { useGymStore } from "@/areas/gym/store/gymStore";
import { useSessionStore } from "@/areas/auth/store/sessionStore";
import { useModalStore } from "./modal";

export const useAppStore = defineStore("app", {
  state: () => ({
    user: useSessionStore(),
    gym: useGymStore(),
    modal: useModalStore(),
  }),
});
