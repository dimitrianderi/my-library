import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { error } from "@/utils/errors";
const TOKEN_KEY = 'token'
const KEY = import.meta.env.VITE_AUTH_KEY
const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`

export const useAuthStore = defineStore('authStore', () => {
    const token = ref(localStorage.getItem(TOKEN_KEY))
    const errAuth = ref('')

    const getToken = computed(() => token.value)
    const isAuth = computed(() => !!token.value)
    const getErrAuth = computed(() => errAuth.value)

    const setToken = (newToken) => token.value = newToken
    const setErrAuth = (errorMessage) => errAuth.value = errorMessage
    const clearErrAuth = () => errAuth.value = null
    const logout = () => token.value = null

    const login = async (payload) => {
        try {
            const { data } = await axios.post(URL, { ...payload, returnSecureToken: true })
            setToken(data.idToken)
        } catch (err) {
            setErrAuth(error(err.response.data.error.message))
            throw new Error()
        }
    }

    watch(token, (newToken) => {
        localStorage.setItem(TOKEN_KEY, newToken)
    })

    return {
        token,
        getToken,
        getErrAuth,
        isAuth,
        login,
        logout,
        clearErrAuth
    }
})