<script lang="ts" setup>
import LoginForm from "./classes/LoginForm";

const form = new LoginForm();
</script>

<template>
  <div class="w-full md:w-1/3">
    <Card title="Acceder">
      <Form :form="form" @on-submit="form.submit()">
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
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </Form>
      <div class="mt-5">
        No tienes cuenta?
        <router-link
          :to="{ name: 'create-account' }"
          class="text-blue-700 hover:underline"
        >
          Regístrate
        </router-link>
      </div>
    </Card>
  </div>
</template>
