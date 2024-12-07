<script lang="ts" setup>
import { Dropdown } from "flowbite";
import { onMounted, ref } from "vue";
import type { DropdownProps } from "../interfaces/HtmlElements";

defineProps<DropdownProps>();
defineEmits(["onOptionClick"]);

const targetEl = ref<HTMLElement | null>(null);
const triggerEl = ref<HTMLElement | null>(null);
const dropdown = ref<any>(null);

onMounted(() => {
  dropdown.value = new Dropdown(triggerEl.value, targetEl.value);
  dropdown.value.hide();
});
</script>

<template>
  <div class="">
    <button
      id="dropdownNavbarLink"
      data-dropdown-toggle="dropdownNavbar"
      class="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      ref="targetEl"
    >
      {{ label }}
      <svg
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    <div
      ref="triggerEl"
      id="dropdownNavbar"
      class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownLargeButton"
      >
        <li v-for="option in options" :key="option.value">
          <a
            @click="() => $emit('onOptionClick', option.value)"
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >{{ option.label }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
