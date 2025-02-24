<script lang="ts" setup>
import { type PropType } from "vue";

defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  columns: {
    type: Array as PropType<{ key: string; label: string }[]>,
    required: true,
  },
  withSlots: {
    type: Boolean,
    default: false,
  },
  clickable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const handleClick = (item: any) => {
  emit("click", item);
};
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            scope="col"
            class="px-6 py-3"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          :class="{ 'cursor-pointer': clickable }"
          v-for="item in data"
          :key="item.id"
          @click="clickable && handleClick(item)"
        >
          <td v-for="column in columns" class="px-6 py-4">
            <template v-if="withSlots">
              <slot :name="column.key" :item="item" />
            </template>
            <template v-else>{{ item[column.key] }}</template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
