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
  live: boolean;
  addModelAsParam: boolean;
  handleSearch(): void;
  exec(): Promise<any>;
}
