<script lang="ts" setup>
// Imports ----
import { useModalStore } from "@/core/store/modal";
import { useGymStore } from "../gym/store/gymStore";
import FindSubscription from "../subscription/classes/FindSubscription";

// Components ----
import SearchInput from "@/core/components/SearchInput.vue";
import SearchContainer from "@/core/components/SearchContainer.vue";

// State ----
const gymStore = useGymStore();
const modalStore = useModalStore();
const findMember = new FindSubscription(gymStore.currentGym?.id!);

// Methods ----
const handleResponse = (data: any) => {
  if (data) {
    modalStore.show("SubscriptionInfoModal", "Subscription", data.data);
  }
};
</script>

<template>
  <div class="home-page">
    <PageHeader title="Inicio" />
    <div class="h-full flex flex-col justify-center items-center gap-10">
      <h1 class="text-2xl font-bold text-gray-600 tracking-widest">
        Hola, bienvenido al Gimnasio {{ gymStore.currentGym?.name }}
      </h1>
      <div class="w-1/2">
        <SearchContainer :search="findMember">
          <SearchInput @on-response="handleResponse" />
        </SearchContainer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  height: 75vh;
}
</style>
