import type { Modal } from "flowbite";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useModalStore = defineStore("modal", () => {
  const modal = reactive({
    modalInstance: null as Modal | null,
    component: null as string | null,
    title: "",
    arg: {},
  });

  const show = (component: string, title: string, arg: any) => {
    modal.component = component;
    modal.title = title;
    modal.arg = arg;
    modal.modalInstance?.show();
  };

  const hide = () => {
    modal.component = null;
    modal.title = "";
    modal.arg = {};
    modal.modalInstance?.hide();
  };

  const modalState = computed(() => modal);

  return {
    modal: modalState,
    show,
    hide,
  };
});
