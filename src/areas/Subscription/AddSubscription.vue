<script lang="ts" setup>
// Imports -----
import { computed, ref } from "vue";
import { useModalStore } from "@/core/store/modal";
import { useGymStore } from "../gym/store/gymStore";

// Components -----
import MembershipCard from "../gym/components/MembershipCard.vue";
import PageHeader from "@/core/components/PageHeader.vue";
import SubscriptionForm from "./classes/SubscriptionForm";
import SearchInput from "@/core/components/SearchInput.vue";
import FindMember from "../member/classes/FindMember";
import SearchContainer from "@/core/components/SearchContainer.vue";

// State -----
const gymStore = useGymStore();
const { show } = useModalStore();
const form = new SubscriptionForm();
const findMember = new FindMember();
const memberCi = ref("");

// Computed -----
const memberships = computed(() => gymStore.memberships);

// Methods -----
const createMember = () => {
  show("CreateMember", "Crear nuevo usuario", {});
};

const searchMember = (ci: string) => {
  console.log(ci);
};
</script>

<template>
  <div class="add-subscription-page">
    <PageHeader title="Registro" />
    <div class="w-full border p-6 px-10">
      <div class="grid grid-cols-2 gap-10">
        <div class="">
          <h3 class="text-lg text-gray-500 font-semibold mb-4">
            Datos de usuario
          </h3>
          <SearchContainer :search="findMember">
            <SearchInput placeholder="Buscar usuario por CI" />
          </SearchContainer>
        </div>
        <div class="">
          <h3 class="text-lg text-gray-500 font-semibold mb-4">
            Datos de plan
          </h3>
          <Form :form="form">
            <div class="mb-3">
              <FieldContainer field="start_date">
                <Label />
                <TextField type="date" />
              </FieldContainer>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
