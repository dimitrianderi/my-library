import axios from "axios";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { useAuthStore } from "./AuthStore";

export const useRequestStore = defineStore("RequestStore", () => {
    const authStore = useAuthStore()
    const books = reactive([])

    const getBooks = computed(() => books.value)

    const addBook = (book) => {
        book.value.push(book)
    }

    const createBook = async (payload) => {
        const token = authStore.getToken
        const user = authStore.getUser.split('.').join('')
        try {
            const { data } = await axios.post(`https://library-ab8c4-default-rtdb.firebaseio.com/${user}.json?auth=${token}`, payload)
            addBook({ ...payload, id: data.name })
        } catch (err) {

        }
    }

    return {
        getBooks,
        createBook
    }
})