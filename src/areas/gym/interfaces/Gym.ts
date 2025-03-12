import type { Membership } from "./Membership";

export interface Gym {
  id: string;
  name: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
  user_id: string;
  memberships?: Membership[];
}

export interface GymForm {
  id?: string;
  name: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
}
