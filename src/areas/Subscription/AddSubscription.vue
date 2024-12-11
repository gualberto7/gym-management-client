<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useMembership } from "../membership/composables/useMembership";
import { useMembershipStore } from "../membership/store/membershipStore";

const { loadMemberships } = useMembership();
const membershipStore = useMembershipStore();

onMounted(() => {
  loadMemberships();
});

const memberships = computed(() => membershipStore.memberships);
</script>

<template>
  <div>
    <h2>Add Sunscription</h2>
    <pre>{{ memberships }}</pre>
  </div>
</template>
