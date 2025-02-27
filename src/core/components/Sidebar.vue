<script setup lang="ts">
import ActivityIcon from "./icons/ActivityIcon.vue";
import AddUserIcon from "./icons/AddUserIcon.vue";
import DoubleArrowLeft from "./icons/DoubleArrowLeft.vue";
import GraphIcon from "./icons/GraphIcon.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import UsersIcon from "./icons/UsersIcon.vue";
import { useGymStore } from "@/areas/gym/store/gymStore";

const { currentGym } = useGymStore();
</script>

<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <div class="flex items-center my-3">
        <div class="me-3">
          <img
            src="/src/assets/gym-logo.png"
            alt="Gym logo"
            class="w-12 h-12 rounded-full"
          />
        </div>
        <div class="flex flex-col">
          <h2 class="front-semibold">{{ currentGym?.name }}</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ currentGym?.phone }}
          </p>
        </div>
      </div>
      <hr />
      <ul class="space-y-2 mt-3 font-medium">
        <li>
          <RouterLink
            :to="{ name: 'home' }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <HomeIcon />
            <span class="flex-1 ms-3 whitespace-nowrap">Inicio</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'users' }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <UsersIcon />
            <span class="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'chenkis' }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <ActivityIcon />
            <span class="flex-1 ms-3 whitespace-nowrap">Actividad</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'register' }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <AddUserIcon />
            <span class="flex-1 ms-3 whitespace-nowrap">Registro</span>
          </RouterLink>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <GraphIcon />
            <span class="ms-3">Reportes</span>
          </a>
        </li>
        <hr />
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <DoubleArrowLeft />
            <span class="ms-3">Cerrar Sesión</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-gray-100 dark:bg-gray-700;
}
</style>
