<script lang="ts" setup>
import { computed } from "vue";
import { useGymStore } from "../gym/store/gymStore";
import MembershipCard from "../gym/components/MembershipCard.vue";
import PageHeader from "@/core/components/PageHeader.vue";
import { useModalStore } from "@/core/store/modal";

const gymStore = useGymStore();
const { show } = useModalStore();

const memberships = computed(() => gymStore.memberships);

const createMember = () => {
  show("CreateMember", "Crear nuevo usuario", {});
};
</script>

<template>
  <div>
    <PageHeader title="Registro" />
    <div class="grid grid-cols-2">
      <div class="text-center">
        <h3 class="text-lg mb-3">Registrar</h3>
        <Button @click="createMember">Create Member</Button>
      </div>
      <div class="text-center">
        <h3 class="text-lg mb-3">Planes disponibles</h3>
        <div class="flex gap-5">
          <MembershipCard
            v-for="membership in memberships"
            :key="membership.id"
            :membership="membership"
          />
        </div>
      </div>
    </div>
  </div>
</template>
