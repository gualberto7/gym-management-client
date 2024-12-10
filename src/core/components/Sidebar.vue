<script setup lang="ts">
import DoubleArrowLeft from "./icons/DoubleArrowLeft.vue";
import GraphIcon from "./icons/GraphIcon.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import UsersIcon from "./icons/UsersIcon.vue";
</script>

<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
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
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <UsersIcon />
            <span class="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
          </a>
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
            <span class="ms-3">Cerra Sesion</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
