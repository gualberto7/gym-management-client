<script lang="ts" setup>
import type { PropType } from "vue";
import type { Membership } from "../interfaces/Membership";
import MembershipForm from "../classes/MembershipForm";

defineProps({
  membership: {
    type: Object as PropType<Membership>,
    required: false,
  },
});

const form = new MembershipForm();
const duartionUnitOptions = [
  { label: "Dias", value: "day" },
  { label: "Semanas", value: "week" },
  { label: "Meses", value: "month" },
  { label: "Años", value: "year" },
];
</script>

<template>
  <div class="py-3 px-6">
    <Form :form="form" @on-submit="form.submit()">
      <div class="mb-3">
        <FieldContainer field="name">
          <Label />
          <TextField />
        </FieldContainer>
      </div>
      <div class="mb-3">
        <FieldContainer field="price">
          <Label />
          <TextField type="number" />
        </FieldContainer>
      </div>
      <div class="mb-3">
        <FieldContainer field="duration">
          <Label />
          <TextField />
        </FieldContainer>
      </div>
      <div class="mb-3">
        <FieldContainer field="duration_unit">
          <Label />
          <SelectInput
            :options="duartionUnitOptions"
            noSelectionText="Selecciona una membresia"
          />
        </FieldContainer>
      </div>
      <div class="mb-3">
        <FieldContainer field="max_checkins">
          <Label />
          <TextField type="number" />
        </FieldContainer>
      </div>
      <div class="mb-3">
        <FieldContainer field="description">
          <Label />
          <TextField />
        </FieldContainer>
      </div>
      <div>
        <Button type="submit">Guardar</Button>
      </div>
    </Form>
  </div>
</template>
