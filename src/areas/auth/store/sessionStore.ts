import { defineStore } from "pinia";
import { ref } from "vue";

export const useSessionStore = defineStore('session', () => {
    const user = ref(null);

    const setUser = (newUser) => {
        user.value = newUser;
    }

    return {
        user,
        setUser
    }
});