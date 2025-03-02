import Login from "../Login.vue";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

describe("Login Page", () => {
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => {
    setActivePinia(createPinia());
    wrapper = mount(Login);
  });

  test("should render login page", async () => {
    expect(wrapper.html()).toContain("Acceder");
  });
});
