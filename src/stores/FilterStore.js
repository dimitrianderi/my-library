import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
const GENRES = 'genres'

const updateGenresInLocalStorage = (genres) => {
    localStorage.setItem(GENRES, JSON.stringify(genres));
};

export const useFilterStore = defineStore('filterStore', () => {
    const genres = ref(JSON.parse(localStorage.getItem(GENRES)) || []);

    const getGenres = computed(() => genres.value);

    const addGenre = (val) => {
        genres.value = [...genres.value, val];
        updateGenresInLocalStorage(genres.value);
    }

    const delGenre = (val) => {
        genres.value = genres.value.filter(genre => genre !== val);
        updateGenresInLocalStorage(genres.value);
    }

    const clearFilters = () => {
        localStorage.removeItem(GENRES);
        genres.value = [];
    }

    return {
        getGenres,
        addGenre,
        delGenre,
        clearFilters
    }
})