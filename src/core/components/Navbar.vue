<script lang="ts" setup>
import { useAuth } from "@/areas/auth/composables/useAuth";
import { useSessionStore } from "@/areas/auth/store/sessionStore";
import Dropdown from "@/core/components/Dropdown.vue";

const session = useSessionStore();
const { logout } = useAuth();

const dropdownItems = [
  { label: "Perfil", value: "profile" },
  { label: "Cerrar sesión", value: "logout" },
];

const handleDropdownClick = (value: string) => {
  switch (value) {
    case "profile":
      console.log("Profile clicked");
      break;
    case "logout":
      console.log("Logout clicked");
      logout();
      break;
  }
};
</script>

<template>
  <nav class="bg-white border-gray-200 shadow dark:bg-gray-900">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <a
        href="https://flowbite.com/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Flowbite</span
        >
      </a>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto"
        id="navbar-search"
      >
        <div class="relative mt-3 md:hidden">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <RouterLink
              :to="{ name: 'dashboard' }"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
              >Inicio</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'register' }"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Registro</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'memberships' }"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Membresias</RouterLink
            >
          </li>
        </ul>
      </div>
      <div>
        <Dropdown
          :label="session.user!.name"
          :options="dropdownItems"
          @on-option-click="handleDropdownClick"
        />
      </div>
    </div>
  </nav>
</template>
