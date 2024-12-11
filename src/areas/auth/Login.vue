<script lang="ts" setup>
import { computed } from "vue";
import LoginForm from "./classes/LoginForm";
import { useSessionStore } from "./store/sessionStore";
import { useRouter } from "vue-router";

const form = new LoginForm();
const session = useSessionStore();
const router = useRouter();

const isAuthenticated = computed(() => session.isAuthenticated);

// If its already authenticated, redirect to home
if (isAuthenticated.value) {
  router.push({ name: "home" });
}
</script>

<template>
  <div class="w-full md:w-1/3">
    <Card title="Acceder">
      <Form :form="form" @on-submit="form.submit()">
        <div class="mb-4">
          <Alert
            v-if="form.error.value"
            color="danger"
            @close="form.clearError()"
          >
            <p>{{ form.error.value }}</p>
          </Alert>
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
        <Button type="submit" color="primary" :disabled="form.processing.value">
          Submit
        </Button>
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
