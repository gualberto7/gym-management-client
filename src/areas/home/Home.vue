<script lang="ts" setup>
// Imports ----
import { useGymStore } from "../gym/store/gymStore";
import FindMember from "../member/classes/FindMember";

// Components ----
import SearchInput from "@/core/components/SearchInput.vue";
import SearchContainer from "@/core/components/SearchContainer.vue";

// State ----
const gymStore = useGymStore();
const findMember = new FindMember();

// Methods ----
const handleResponse = (data: any) => {
  console.log(data);
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
