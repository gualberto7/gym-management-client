import { ref, watch } from "vue";
import api from "../api";
import _ from "lodash";

export default class Search {
  public url = "";
  public modelValue: any;
  public filters: Array<string> = [];
  public sorts = null;
  public results = [];
  public placeholder = "Search...";
  public loading = false;
  public error = ref("");
  public live = true;
  private searchFunction = _.debounce(this.exec, 500);
  public addModelAsParam = false;

  constructor(
    url: string,
    modelValue: string,
    filters: string[] = [],
    sorts = null
  ) {
    this.url = url;
    this.modelValue = ref(modelValue);
    this.filters = filters;
    this.sorts = sorts;

    watch(this.modelValue, () => {
      this.handleSearch();
    });
  }

  handleSearch() {
    if (this.live) {
      // Execute search with debounce to avoid multiple requests (500 ms)
      this.searchFunction();
    }
  }

  async exec(): Promise<any> {
    this.error.value = "";
    this.loading = true;
    try {
      const { data } = await api.get(this.getUrl());
      this.results = data;
      return data;
    } catch (error) {
      this.handleErrors(error);
    } finally {
      this.loading = false;
    }
  }

  getUrl() {
    if (this.addModelAsParam) {
      return `${this.url}/${this.modelValue.value}`;
    }
    if (this.filters.length) {
      return `${this.url}?filter[${this.filters[0]}]=${this.modelValue.value}`;
    }
    return this.url;
  }

  handleErrors(error: any) {
    if (error.status === 404) {
      this.error.value = `No se encontraron resultados para "${this.modelValue.value}"`;
    }
    if (error.status === 500) {
      this.error.value = "Algo salió mal. Por favor, intente nuevamente.";
    }
  }
}
