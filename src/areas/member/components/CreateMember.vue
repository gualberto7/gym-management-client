<script setup lang="ts">
import { defineProps } from "vue";
import MemberForm from "../classes/MemberForm";

const props = defineProps({
  arg: {
    type: Object,
    required: true,
  },
});

const form = new MemberForm();
form.model.ci = props.arg.ci;
</script>

<template>
  <div class="p-6">
    <Form :form="form" @on-submit="form.submit()">
      <div class="mb-3">
        <FieldContainer field="name">
          <Label />
          <TextField />
        </FieldContainer>
      </div>
      <div class="mb-3">
        <FieldContainer field="ci">
          <Label />
          <TextField />
        </FieldContainer>
      </div>
      <div class="mb-3">
        <FieldContainer field="phone">
          <Label />
          <TextField />
        </FieldContainer>
      </div>
      <div class="mb-3">
        <FieldContainer field="email">
          <Label />
          <TextField type="email" />
        </FieldContainer>
      </div>
      <div>
        <Button type="submit" :disabled="!form.isValid.value">Guardar</Button>
      </div>
    </Form>
  </div>
</template>
