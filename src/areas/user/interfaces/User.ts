export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
}

type UserRole = "owner" | "admin" | "user";
