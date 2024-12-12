<script lang="ts" setup>
import { useAuth } from "@/areas/auth/composables/useAuth";
import { useSessionStore } from "@/areas/auth/store/sessionStore";
import Dropdown from "@/core/components/Dropdown.vue";
import Avatar from "./Avatar.vue";

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
  <nav
    class="w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div
          class="ms-0 sm:ms-72 flex items-center justify-start rtl:justify-end"
        >
          <div class="w-96">
            <form>
              <label
                for="search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >Search</label
              >
              <div class="relative">
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
                  type="search"
                  id="search"
                  class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div class="flex items-center">
          <Avatar :name="session.user!.name" class="me-3" />
          <Dropdown
            :label="session.user?.name || 'Usuario'"
            :options="dropdownItems"
            @on-option-click="handleDropdownClick"
          />
        </div>
      </div>
    </div>
  </nav>
</template>
