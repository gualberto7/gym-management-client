export interface Member {
  id: number;
  name: string;
  ci: string;
  phone: string;
  email: string;
}

export interface CreateMember {
  name: string;
  ci: string;
  phone: string;
  email: string;
}
