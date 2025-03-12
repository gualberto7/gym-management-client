import type { Gym } from "./Gym";

export interface GymStoreState {
  gyms: Gym[];
  currentGym: Gym;
}

export interface GymStoreActions {
  setGyms(gyms: Gym[]): void;
  setCurrentGym(gym: Gym): void;
}

export interface GymStoreGetters {
  memberships: Gym["memberships"];
}

export interface GymStore
  extends GymStoreState,
    GymStoreActions,
    GymStoreGetters {}
