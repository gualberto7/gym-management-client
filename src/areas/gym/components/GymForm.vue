<script lang="ts" setup>
import { onMounted } from "vue";
import GymForm from "../classes/GymForm";
import { useGymStore } from "../store/gymStore";

// Imports -----

// State -----
const form = new GymForm();
const { currentGym } = useGymStore();

// Hooks -----
onMounted(() => {
  form.setInitialValues(currentGym);
});
</script>

<template>
  <div class="w-1/2 border p-6 px-10">
    <Form :form="form" @on-submit="form.submit()">
      <div class="mb-3">
        <FieldContainer field="name">
          <Label />
          <TextField />
        </FieldContainer>
      </div>
      <div class="mb-3">
        <FieldContainer field="address">
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
          <TextField />
        </FieldContainer>
      </div>
      <div class="mb-3">
        <FieldContainer field="website">
          <Label />
          <TextField />
        </FieldContainer>
      </div>
      <Button type="submit">{{
        form.model.id ? "Actualizar" : "Crear"
      }}</Button>
    </Form>
  </div>
</template>
