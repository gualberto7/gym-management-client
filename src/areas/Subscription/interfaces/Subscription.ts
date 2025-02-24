import type { Pagination } from "@/core/interfaces/Pagination";

export interface Subscription {
  id: number;
  member: string;
  email: string;
  membership: string;
  start_date: string;
  end_date: string;
}

export interface PaginatedSubscription extends Pagination<Subscription> {}
