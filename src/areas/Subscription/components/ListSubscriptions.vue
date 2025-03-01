<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import type {
  Subscription,
  PaginatedSubscription,
} from "../interfaces/Subscription";
import api from "@/core/api";
import SubscriptionStatus from "./SubscriptionStatus.vue";
import { useModalStore } from "@/core/store/modal";

const { show } = useModalStore();
const subscriptions = reactive<PaginatedSubscription>({
  data: [],
  links: { prev: "", next: "", first: "", last: "" },
  meta: {
    current_page: 0,
    from: 0,
    last_page: 0,
    path: "",
    per_page: 0,
    to: 0,
    total: 0,
    links: [],
  },
});
const columns = [
  {
    key: "member",
    label: "Name",
  },
  {
    key: "status",
    label: "Estado",
  },
  {
    key: "membership",
    label: "Membresia",
  },
];

onMounted(async () => {
  const { data } = await api.get<PaginatedSubscription>(
    "api/subscribed-members"
  );
  Object.assign(subscriptions, data);
});

const handleClick = (item: Subscription) => {
  show("SubscriptionInfoModal", "Subscription", item);
};
</script>

<template>
  <div>
    <Table
      :data="subscriptions.data"
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
      <template #status="{ item }">
        <SubscriptionStatus :subscription="item" />
      </template>
      <template #membership="{ item }">
        <span>{{ item.membership.name }}</span>
      </template>
    </Table>
  </div>
</template>
