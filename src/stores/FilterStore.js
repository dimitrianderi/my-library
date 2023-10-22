import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
const GENRES = 'genres'
const TITLE = 'title'
const RANGES = 'ranges'
const SORT = 'sort'

const updateLocalStorage = (val, filterName) => {
    localStorage.setItem(filterName, JSON.stringify(val));
};

export const useFilterStore = defineStore('filterStore', () => {
    const genres = ref(JSON.parse(localStorage.getItem(GENRES)) || [])
    const inputs = ref(JSON.parse(localStorage.getItem(TITLE)) || [])
    const ranges = ref(JSON.parse(localStorage.getItem(RANGES)) || [])
    const sort = ref(JSON.parse(localStorage.getItem(SORT)) || '')

    const getGenres = computed(() => genres.value)
    const getInputs = computed(() => inputs.value)
    const getRanges = computed(() => ranges.value)
    const getSort = computed(() => sort.value)

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

    const addSort = (val) => {
        sort.value = val
        updateLocalStorage(sort.value, SORT)
    }

    const delGenre = (val) => {
        genres.value = genres.value.filter(genre => genre !== val);
        updateLocalStorage(genres.value, GENRES);
    }

    const clearFilters = () => {
        localStorage.removeItem(GENRES);
        localStorage.removeItem(TITLE);
        localStorage.removeItem(RANGES);
        localStorage.removeItem(SORT);
        genres.value = [];
        inputs.value = [];
        ranges.value = [];
        sort.value = [];
    }

    return {
        getGenres,
        getInputs,
        getRanges,
        getSort,
        addGenre,
        addInputs,
        addRanges,
        addSort,
        delGenre,
        clearFilters
    }
})