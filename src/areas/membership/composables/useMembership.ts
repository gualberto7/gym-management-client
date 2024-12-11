import { useMembershipStore } from "../store/membershipStore";
import api from "@/core/api";

export const useMembership = () => {
  const { setMemberships } = useMembershipStore();

  const loadMemberships = async () => {
    const { data } = await api.get("api/memberships");
    setMemberships(data);
  };

  return {
    loadMemberships,
  };
};
