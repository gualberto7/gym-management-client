export interface Pagination<T> {
  data: T[];
  links: links;
  meta: meta;
}

export type links = {
  first: string;
  last: string;
  prev: string;
  next: string;
};

export type meta = {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
  links: metaLinks[];
};

type metaLinks = {
  url: string;
  label: string;
  active: boolean;
};
