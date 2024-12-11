import { defineStore } from "pinia";
import { reactive } from "vue";
import type { Gym } from "../interfaces/Gym";

export const useGymStore = defineStore("gym", () => {
  const gym = reactive<Gym[]>([]);

  const setGyms = (gyms: Gym[]) => {
    Object.assign(gym, gyms);
  };

  return {
    gym,
    setGyms,
  };
});
