import { defineStore } from "pinia";
import { reactive } from "vue";
import type { Membership } from "../interfaces/Membership";

export const useMembershipStore = defineStore("membership", () => {
  const memberships = reactive<Membership[]>([]);

  const addMembership = (membership: Membership) => {
    memberships.push(membership);
  };

  const setMemberships = (newMemberships: Membership[]) => {
    memberships.push(...newMemberships);
  };

  return {
    memberships,
    addMembership,
    setMemberships,
  };
});
