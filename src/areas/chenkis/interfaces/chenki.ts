import type { Pagination } from "@/core/interfaces/Pagination";

export interface Chenki {
  data: {
    id: number;
    member_name: string;
    member_phone: string;
    created_at: string;
    created_by: string;
  };
}

export interface PaginatedChenkis extends Pagination<Chenki> {}
