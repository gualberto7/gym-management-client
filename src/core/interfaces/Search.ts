import type { Ref } from "vue";

export interface SearchInterface {
  url: string;
  modelValue: any;
  filters: any;
  sorts: any;
  results: any[];
  placeholder: string;
  loading: Ref<boolean>;
  error: string;
  handleSearch(): void;
  exec(): Promise<any>;
}
