import type { User } from "@/areas/user/interfaces/User";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSessionStore = defineStore('session', () => {
    const user = ref<User | null>();

    const setUser = (newUser: User) => {
        user.value = newUser;
    }

    return {
        user,
        setUser
    }
});