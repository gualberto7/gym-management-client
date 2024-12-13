<script lang="ts" setup>
// Imports -----
import { computed } from "vue";
import { useModalStore } from "@/core/store/modal";
import { useGymStore } from "../gym/store/gymStore";

// Components -----
import MembershipCard from "../gym/components/MembershipCard.vue";
import PageHeader from "@/core/components/PageHeader.vue";
import SubscriptionForm from "./classes/SubscriptionForm";

// State -----
const gymStore = useGymStore();
const { show } = useModalStore();
const form = new SubscriptionForm();

// Computed -----
const memberships = computed(() => gymStore.memberships);

// Methods -----
const createMember = () => {
  show("CreateMember", "Crear nuevo usuario", {});
};
</script>

<template>
  <div class="add-subscription-page">
    <PageHeader title="Registro" />
    <div class="w-full border p-6 px-10">
      <div class="grid grid-cols-2">
        <div class="">
          <h3 class="text-lg text-gray-500 font-semibold mb-4">
            Datos de usuario
          </h3>
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
