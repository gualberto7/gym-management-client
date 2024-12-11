import { defineStore } from "pinia";
import { reactive } from "vue";
import type { Gym } from "../interfaces/Gym";
import { set } from "lodash";

export const useGymStore = defineStore("gym", () => {
  const gyms = reactive<Gym[]>([]);
  const currentGym = reactive<Gym | {}>({});

  const setGyms = (gyms: Gym[]) => {
    Object.assign(gyms, gyms);
    setCurrentGym(gyms[0] || {});
  };

  const setCurrentGym = (gym: Gym) => {
    Object.assign(currentGym, gym);
  };

  return {
    gyms,
    setGyms,
    currentGym,
  };
});
