export interface Gym {
  id: number;
  name: string;
  adress: string;
  phone: string;
  email?: string;
  website?: string;
  user_id: number;
  memberships?: Membership[];
}
