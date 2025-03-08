import type { Pagination } from "@/core/interfaces/Pagination";

export interface Subscription {
  id: number;
  start_date: string;
  end_date: string;
  member: {
    id: number;
    name: string;
    email: string;
    phone: string;
  };
  membership: {
    id: number;
    name: string;
  };
}

export interface PaginatedSubscription extends Pagination<Subscription> {}
