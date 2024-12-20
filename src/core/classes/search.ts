import { ref, watch } from "vue";
import api from "../api";

export default class Search {
  public url = "";
  public modelValue: any;
  public filters = null;
  public sorts = null;
  public results = [];
  public placeholder = "Search...";
  public loading = false;
  public error = "";

  constructor(url: string, modelValue: string, filters = null, sorts = null) {
    this.url = url;
    this.modelValue = ref(modelValue);
    this.filters = filters;
    this.sorts = sorts;

    watch(this.modelValue, () => {
      this.handleSearch();
    });
  }

  handleSearch() {
    console.log("Searching...", this.modelValue.value);
  }

  async search(): Promise<any> {
    this.loading = true;
    try {
      const { data } = await api.get(this.url);
      this.results = data;
    } catch (error) {
      console.error("Error", error);
    } finally {
      this.loading = false;
    }
  }
}
