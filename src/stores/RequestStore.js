import axios from "@/axios/request";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useAuthStore } from "./AuthStore";
import { useSuccessStore } from "@/stores/SuccessStore"

export const useRequestStore = defineStore("RequestStore", () => {
    const authStore = useAuthStore()
    const successStore = useSuccessStore()
    const books = ref([])

    const getBooks = computed(() => books.value)
    const setBooks = (requests) => books.value = requests


    const addBook = (book) => books.value.push(book)
    const replaceBook = (book) => {
        const idx = books.value.findIndex(item => item.id === book.id);
        if (idx !== -1) {
            books.value[idx] = book
        }
    }


    const createBook = async (payload) => {
        const token = authStore.getToken
        const user = authStore.getUser.split('.').join('')
        try {
            const { data } = await axios.post(`/${user}.json?auth=${token}`, payload)
            addBook({ ...payload, id: data.name })
            successStore.updateSuccess('Книга создана!')
        } catch (err) {
            successStore.updateSuccess('')
            throw new Error()
        }
    }

    const updateBook = async (payload) => {
        const token = authStore.getToken
        const user = authStore.getUser.split('.').join('')
        try {
            await axios.put(`/${user}/${payload.id}.json?auth=${token}`, payload)
            replaceBook({ ...payload })
            successStore.updateSuccess('Информация обновлена!')
        } catch (err) {
            successStore.updateSuccess('')
            throw new Error()
        }
    }

    const loadBooks = async () => {
        const token = authStore.getToken
        const user = authStore.getUser.split('.').join('')
        try {
            const { data } = await axios.get(`/${user}.json?auth=${token}`)
            if (data) {
                const requests = Object.keys(data).map(id => ({ ...data[id], id }))
                setBooks(requests)
            }
        } catch (err) {
            throw new Error()
        }
    }

    return {
        getBooks,
        createBook,
        updateBook,
        loadBooks, books
    }
})