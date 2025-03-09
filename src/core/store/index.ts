import { defineStore } from "pinia";

import { useGymStore } from "@/areas/gym/store/gymStore";
import { useSessionStore } from "@/areas/auth/store/sessionStore";
import { useModalStore } from "./modal";
import eventBus from "./eventBus";

export const useAppStore = defineStore("app", {
  state: () => ({
    user: useSessionStore(),
    gym: useGymStore(),
    modal: useModalStore(),
    event: eventBus,
  }),
});
