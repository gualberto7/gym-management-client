<script lang="ts" setup>
// Imports ----
import { computed, onMounted } from "vue";
import { useAppStore } from "@/core/store";
import { useDate } from "@/core/composables/useDate";
import type { Subscription } from "../interfaces/Subscription";

// Components ----
import SubscriptionStatus from "./SubscriptionStatus.vue";
import SearchInput from "@/core/components/SearchInput.vue";
import SearchSubscription from "../classes/SearchSubscription";
import SearchContainer from "@/core/components/SearchContainer.vue";

// State ----
const { modal, gym } = useAppStore();
const { formatDate } = useDate();
const columns = [
  {
    key: "member",
    label: "Name",
  },
  {
    key: "dates",
    label: "Fecha Inicio - Fin",
  },
  {
    key: "status",
    label: "Estado",
  },
];
const search = new SearchSubscription(gym.currentGym?.id!);

// Hooks ----
onMounted(async () => {
  await search.exec();
});

// Methods ----
const handleClick = (item: Subscription) => {
  modal.show("SubscriptionInfoModal", "Subscription", item);
};

// Computed ----
const subscriptions = computed(() => search.results.value?.data || []);
</script>

<template>
  <div>
    <div class="w-96 mb-4">
      <SearchContainer :search="search">
        <SearchInput />
      </SearchContainer>
    </div>
    <Table
      :data="subscriptions"
      :columns="columns"
      withSlots
      clickable
      @click="handleClick"
    >
      <template #member="{ item }">
        <div
          scope="row"
          class="flex items-center text-gray-900 whitespace-nowrap dark:text-white"
        >
          <Avatar :name="item.member.name" />
          <div class="ps-3">
            <div class="text-base font-semibold">{{ item.member.name }}</div>
            <div class="font-normal text-gray-500">{{ item.member.phone }}</div>
          </div>
        </div>
      </template>
      <template #dates="{ item }">
        <div>
          <div class="font-semibold">
            {{ formatDate(item.start_date) }} - {{ formatDate(item.end_date) }}
          </div>
          <p>Plan {{ item.membership.name }}</p>
        </div>
      </template>
      <template #status="{ item }">
        <SubscriptionStatus :subscription="item" />
      </template>
    </Table>
  </div>
</template>
