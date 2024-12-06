<script lang="ts" setup>
import RegisterForm from "./classes/RegisterForm";

const form = new RegisterForm();
</script>

<template>
  <div class="w-full md:w-1/3">
    <Card title="Crear cuenta">
      <Form :form="form" @on-submit="form.submit()">
        <div class="mb-5">
          <FieldContainer field="name">
            <Label />
            <TextField />
          </FieldContainer>
        </div>
        <div class="mb-5">
          <FieldContainer field="email">
            <Label />
            <TextField type="email" />
          </FieldContainer>
        </div>
        <div class="mb-5">
          <FieldContainer field="password">
            <Label />
            <TextField type="password" />
          </FieldContainer>
        </div>
        <div class="mb-5">
          <FieldContainer field="password_confirmation">
            <Label />
            <TextField type="password" />
          </FieldContainer>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </Form>
      <div class="mt-5">
        Ya tienes cuenta?
        <router-link
          :to="{ name: 'login' }"
          class="text-blue-700 hover:underline"
        >
          Accede
        </router-link>
      </div>
    </Card>
  </div>
</template>
