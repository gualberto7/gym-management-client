<script lang="ts" setup>
import type { PropType } from "vue";
import type { links, meta } from "../interfaces/Pagination";

defineProps({
  links: {
    type: Object as PropType<links>,
    required: true,
  },
  meta: {
    type: Object as PropType<meta>,
    required: false,
  },
});

const emit = defineEmits(["paginate"]);
</script>

<template>
  <div class="flex justify-between items-center mt-4">
    <div class="flex-1 flex justify-between sm:hidden">
      <button
        v-if="links.prev"
        @click="emit('paginate', links.prev)"
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        Previous
      </button>
      <button
        v-if="links.next"
        @click="emit('paginate', links.next)"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        Next
      </button>
    </div>
    <div
      v-if="meta"
      class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
    >
      <div>
        <p class="text-sm text-gray-700">
          Mostrando
          <span class="font-medium">{{ meta.from }}</span>
          a
          <span class="font-medium">{{ meta.to }}</span>
          de
          <span class="font-medium">{{ meta.total }}</span>
          resultados
        </p>
      </div>
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <!-- <button
            v-if="links.prev"
            @click="emit('paginate', links.prev)"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10.707 3.293a1 1 0 00-1.414 0l-6 6a1 1 0 000 1.414l6 6a1 1 0 001.414-1.414L6.414
                                10 10.707 5.707a1 1 0 000-1.414z"
              />
            </svg>
          </button> -->
          <div v-for="link in meta.links" :key="link.label">
            <button
              v-if="link.label.length < 3"
              @click="emit('paginate', link.url)"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-300"
              :class="{ 'bg-gray-300': link.active }"
              :disabled="link.active"
            >
              {{ link.label }}
            </button>
          </div>
          <!-- <button
            v-if="links.next"
            @click="emit('paginate', links.next)"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Next</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9.293 16.707a1 1 0 001.414 0l6-6a1 1 0 000-1.414l-6-6a1 1 0 00-1.414 1.414L13.586
                                10 9.293 14.293a1 1 0 000 1.414z"
              />
            </svg>
          </button> -->
        </nav>
      </div>
    </div>
  </div>
</template>
