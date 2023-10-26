import axios from "axios";
import { defineStore } from "pinia";
import { useFilterStore } from "@/stores/FilterStore";
import { useRequestStore } from "@/stores/RequestStore";
import { computed, ref, watch } from "vue";
import { error } from "@/utils/errors";
const TOKEN_KEY = 'token'
const USER = 'user'
const KEY = import.meta.env.VITE_AUTH_KEY
const URL_AUTH = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`
const URL_REG = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY}`

export const useAuthStore = defineStore('authStore', () => {
    const filterStore = useFilterStore()
    const requestStore = useRequestStore()

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
        filterStore.clearFilters()
        requestStore.delBooks()
    }

    const login = async (payload) => {
        try {
            const { data } = await axios.post(URL_AUTH, { ...payload, returnSecureToken: true })
            setToken(data.idToken)
            setEmail(data.email)
        } catch (err) {
            setErrAuth(error(err.response.data.error.message))
            throw new Error()
        }
    }

    const reg = async (payload) => {
        try {
            await axios.post(URL_REG, { ...payload, returnSecureToken: true })
            await login({ email: payload.email, password: payload.password })
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
        getUser,
        reg
    }
})