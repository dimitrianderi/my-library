import axios from "axios";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { useAuthStore } from "./AuthStore";
import { useSuccessStore } from "@/stores/SuccessStore"

export const useRequestStore = defineStore("RequestStore", () => {
    const authStore = useAuthStore()
    const successStore = useSuccessStore()
    const books = ref([])

    const getBooks = computed(() => books.value)

    const addBook = (book) => books.value.push(book)

    const createBook = async (payload) => {
        const token = authStore.getToken
        const user = authStore.getUser.split('.').join('')
        try {
            const { data } = await axios.post(`https://library-ab8c4-default-rtdb.firebaseio.com/${user}.json?auth=${token}`, payload)
            addBook({ ...payload, id: data.name })
            successStore.updateSuccess(true)
        } catch (err) {
            successStore.updateSuccess(false)
            throw new Error()
        }
    }

    return {
        getBooks,
        createBook,
    }
})