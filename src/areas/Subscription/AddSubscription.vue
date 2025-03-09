<script lang="ts" setup>
// Imports -----
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useAppStore } from "@/core/store";
import { events } from "@/core/store/eventBus";
import FindMember from "../member/classes/FindMember";
import type { Member } from "../member/interfaces/Member";
import SubscriptionForm from "./classes/SubscriptionForm";

// Components -----
import PageHeader from "@/core/components/PageHeader.vue";
import SearchInput from "@/core/components/SearchInput.vue";
import FieldContainer from "@/core/components/FieldContainer.vue";
import SearchContainer from "@/core/components/SearchContainer.vue";

// State -----
const { modal, gym, event } = useAppStore();
const form = new SubscriptionForm();
const findMember = new FindMember();
const member = ref<Member | null>();

// Hooks -----
onMounted(() => {
  event.on(events.MEMBER_CREATED, handleResponse);
});

onUnmounted(() => {
  event.off(events.MEMBER_CREATED, handleResponse);
});

// Computed -----
const memberships = computed(() => gym.memberships || []);
const membershipOptions = computed(() =>
  memberships.value.map((membership: any) => ({
    label: membership.name,
    value: membership.id,
  }))
);

// Methods -----
const createMember = () => {
  modal.show("CreateMember", "Crear nuevo usuario", {
    ci: findMember.modelValue,
  });
};

const handleResponse = (newMember: Member) => {
  if (newMember) {
    member.value = newMember;
    form.model.member_id = newMember.id;
    findMember.reset();
  }
};

const resetForm = () => {
  form.reset();
  member.value = null;
};
</script>

<template>
  <div class="add-subscription-page">
    <PageHeader title="Registro" />
    <div class="w-full border p-6 px-10">
      <div class="mb-8">
        <div class="w-1/2">
          <SearchContainer :search="findMember">
            <SearchInput @on-response="handleResponse" />
          </SearchContainer>
        </div>
        <div v-show="findMember.error.value">
          <p class="text-red-500 text-sm mt-2">
            {{ findMember.error.value }}
          </p>
          <Button @click="createMember" size="sm">Crea uno</Button>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10">
        <Form :form="form" @on-submit="form.submit()">
          <div class="mt-4">
            <div class="mb-3">
              <h3 class="text-lg mb-2">
                Nombre usuario: <strong>{{ member?.name }}</strong>
              </h3>
              <h3 class="text-lg mb-2">
                Celular: <strong>{{ member?.phone }}</strong>
              </h3>
            </div>
            <div class="mb-3">
              <FieldContainer field="membership_id">
                <Label />
                <SelectInput
                  :options="membershipOptions"
                  noSelectionText="Selecciona una membresia"
                />
              </FieldContainer>
            </div>
            <div class="mb-3">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <FieldContainer field="start_date">
                  <Label />
                  <TextField type="date" />
                </FieldContainer>
                <FieldContainer field="end_date">
                  <Label />
                  <TextField type="date" />
                </FieldContainer>
              </div>
            </div>
          </div>
          <div class="flex justify-center gap-2 mt-10">
            <Button color="default" type="button" @click="resetForm"
              >Limpiar</Button
            >
            <Button type="submit" :disabled="!form.isValid.value || !member"
              >Guardar</Button
            >
          </div>
        </Form>

        <div class="mt-4 border-l-2 pl-4">
          <h3 class="text-lg mb-2">Membresias</h3>
          <div class="ms-4">
            <ul class="list-disc list-inside">
              <li
                v-for="membership in memberships"
                :key="membership.id"
                class="mb-2"
              >
                {{ membership.name }} - {{ membership.duration }}
                {{ membership.duration_unit }} - {{ membership.price }} Bs.
              </li>
            </ul>
          </div>
          <h3 class="text-lg mb-2">Promociones activas</h3>
          <div class="ms-4">
            <span class="text-sm text-gray-500"
              >Actualmente no hay promociones activas</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
