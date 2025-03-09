export interface Member {
  id: string;
  name: string;
  ci: string;
  phone: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface CreateMember {
  name: string;
  ci: string;
  phone: string;
  email: string;
}
