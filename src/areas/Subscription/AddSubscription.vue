<script lang="ts" setup>
import { computed } from "vue";
import { useGymStore } from "../gym/store/gymStore";
import MembershipCard from "../gym/components/MembershipCard.vue";

const gymStore = useGymStore();

const memberships = computed(() => gymStore.memberships);
</script>

<template>
  <div>
    <h2>Add Sunscription</h2>
    <div class="flex gap-5">
      <MembershipCard
        v-for="membership in memberships"
        :key="membership.id"
        :membership="membership"
      />
    </div>
  </div>
</template>
