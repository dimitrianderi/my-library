import { defineStore } from "pinia";
import { ref, watch } from "vue";
const TOKEN_KEY = 'token'

export const useAuthStore = defineStore('authStore', () => {
    const token = ref(localStorage.getItem(TOKEN_KEY))

    const getToken = computed(() => token.value)
    const isAuth = computed(() => !!token.value)

    const setToken = (token) => token.value = token
    const logout = () => token.value = null

    const login = (payload) => {

    }

    watch(token, (newToken) => {
        localStorage.setItem(TOKEN_KEY, newToken)
    })
})