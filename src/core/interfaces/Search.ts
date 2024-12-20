export interface SearchInterface {
  url: string;
  modelValue: any;
  filters: any;
  sorts: any;
  results: any[];
  loading: boolean;
  error: string;
  handleSearch(): void;
  search(): Promise<any>;
}
