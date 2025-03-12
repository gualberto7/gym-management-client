import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import type { Gym } from "../interfaces/Gym";

export const useGymStore = defineStore("gym", () => {
  const gyms = reactive<Gym[]>([]);
  const currentGym = ref<Gym>({
    id: "",
    name: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    user_id: "",
  });

  const setGyms = (_gyms: Gym[]) => {
    Object.assign(gyms, _gyms);
    setCurrentGym(_gyms[0]);
  };

  const setCurrentGym = (gym: Gym) => {
    currentGym.value = gym;
  };

  const memberships = computed(() => currentGym.value?.memberships);

  return {
    gyms,
    setGyms,
    currentGym,

    // Computed
    memberships,
  };
});
