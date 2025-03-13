<script lang="ts" setup>
// Imports -----
import api from "@/core/api";
import { onMounted, ref } from "vue";
import { useAppStore } from "@/core/store";
import type { Membership as MembershipInterface } from "../interfaces/Membership";

// Components -----
import EditIcon from "@/core/components/icons/EditIcon.vue";
import ShowIcon from "@/core/components/icons/ShowIcon.vue";
import TrashIcon from "@/core/components/icons/TrashIcon.vue";

// State -----
const memberships = ref<MembershipInterface[]>([]);
const { gym, modal } = useAppStore();
const columns = [
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Price",
    key: "price",
  },
  {
    label: "Duration",
    key: "duration",
  },
  {
    label: "Actions",
    key: "actions",
  },
];

// Hooks -----
onMounted(async () => {
  const { data } = await api.get(`api/gym/${gym.currentGym.id}/memberships`);
  memberships.value = data;
});

// Methods -----
const handleActionClick = (action: string, membership: MembershipInterface) => {
  switch (action) {
    case "show":
      modal.show("ShowMembershipModal", "Detalle de Membresia", membership);
      break;
    case "edit":
      modal.show("EditMembershipModal", "Edit Membership", membership);
      break;
    case "delete":
      modal.show("DeleteMembershipModal", "Delete Membership", membership);
      break;
  }
};
</script>

<template>
  <div>
    <Table :data="memberships" :columns="columns" withSlots>
      <template #name="{ item }">
        <p>{{ item.name }}</p>
      </template>
      <template #price="{ item }">
        <p>{{ item.price }}</p>
      </template>
      <template #duration="{ item }">
        <p>{{ item.duration }} - {{ item.duration_unit }}</p>
      </template>
      <template #actions="{ item }">
        <div class="flex gap-3">
          <Button @click="handleActionClick('show', item)" size="xs">
            <ShowIcon />
          </Button>
          <Button size="xs" color="secondary">
            <EditIcon />
          </Button>
          <Button size="xs" color="danger">
            <TrashIcon />
          </Button>
        </div>
      </template>
    </Table>
  </div>
</template>
