import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { error } from "@/utils/errors";
const TOKEN_KEY = 'token'
const USER = 'user'
const KEY = import.meta.env.VITE_AUTH_KEY
const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`

export const useAuthStore = defineStore('authStore', () => {
    const token = ref(localStorage.getItem(TOKEN_KEY))
    const user = ref(localStorage.getItem(USER))
    const errAuth = ref('')

    const getToken = computed(() => token.value)
    const getUser = computed(() => user.value)
    const isAuth = computed(() => !!token.value)
    const getErrAuth = computed(() => errAuth.value)

    const setToken = (newToken) => token.value = newToken
    const setEmail = (newEmail) => user.value = newEmail
    const setErrAuth = (errorMessage) => errAuth.value = errorMessage
    const clearErrAuth = () => errAuth.value = null
    const logout = () => {
        token.value = null
        user.value = null
    }

    const login = async (payload) => {
        try {
            const { data } = await axios.post(URL, { ...payload, returnSecureToken: true })
            setToken(data.idToken)
            setEmail(data.email)
        } catch (err) {
            setErrAuth(error(err.response.data.error.message))
            throw new Error()
        }
    }

    watch(token, (newToken) => newToken ? localStorage.setItem(TOKEN_KEY, newToken) : localStorage.removeItem(TOKEN_KEY))
    watch(user, (newEmail) => newEmail ? localStorage.setItem(USER, newEmail) : localStorage.removeItem(USER))

    return {
        token,
        getToken,
        getErrAuth,
        isAuth,
        login,
        logout,
        clearErrAuth,
        getUser
    }
})