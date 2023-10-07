import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
const TOKEN_KEY = 'token'
const KEY = import.meta.env.VITE_AUTH_KEY
const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`

export const useAuthStore = defineStore('authStore', () => {
    const token = ref(localStorage.getItem(TOKEN_KEY))

    const getToken = computed(() => token.value)
    const isAuth = computed(() => !!token.value)

    const setToken = (newToken) => {
        token.value = newToken
    }
    const logout = () => token.value = null

    const login = async (payload) => {
        try {
            const { data } = await axios.post(URL, { ...payload, returnSecureToken: true })
            setToken(data.idToken)
        } catch (err) {
            throw new Error()
        }
    }

    watch(token, (newToken) => {
        localStorage.setItem(TOKEN_KEY, newToken)
    })

    return {
        token,
        getToken,
        isAuth,
        login,
        logout
    }
})