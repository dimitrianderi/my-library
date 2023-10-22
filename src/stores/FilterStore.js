import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
const GENRES = 'genres'
const TITLE = 'title'
const RANGES = 'ranges'

const updateLocalStorage = (val, filterName) => {
    localStorage.setItem(filterName, JSON.stringify(val));
};

export const useFilterStore = defineStore('filterStore', () => {
    const genres = ref(JSON.parse(localStorage.getItem(GENRES)) || []);
    const inputs = ref(JSON.parse(localStorage.getItem(TITLE)) || [])
    const ranges = ref(JSON.parse(localStorage.getItem(RANGES)) || [])

    const getGenres = computed(() => genres.value);
    const getInputs = computed(() => inputs.value)
    const getRanges = computed(() => ranges.value)

    const addGenre = (val) => {
        genres.value = [...genres.value, val]
        updateLocalStorage(genres.value, GENRES)
    }

    const addInputs = (val) => {
        inputs.value = val
        updateLocalStorage(inputs.value, TITLE)
    }

    const addRanges = (val) => {
        ranges.value = val
        updateLocalStorage(ranges.value, RANGES)
    }

    const delGenre = (val) => {
        genres.value = genres.value.filter(genre => genre !== val);
        updateLocalStorage(genres.value, GENRES);
    }


    const clearFilters = () => {
        localStorage.removeItem(GENRES);
        localStorage.removeItem(TITLE);
        localStorage.removeItem(RANGES);
        genres.value = [];
        inputs.value = [];
        ranges.value = [];
    }

    return {
        getGenres,
        getInputs,
        getRanges,
        addGenre,
        addInputs,
        addRanges,
        delGenre,
        clearFilters
    }
})