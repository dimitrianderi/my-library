import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
const GENRES = 'genres'
const TITLE = 'title'
const RANGES = 'ranges'
const SORT = 'sort'
const PUBLISHERS = 'publishers'

const updateLocalStorage = (val, filterName) => {
    localStorage.setItem(filterName, JSON.stringify(val));
};

export const useFilterStore = defineStore('filterStore', () => {
    const genres = ref(JSON.parse(localStorage.getItem(GENRES)) || [])
    const inputs = ref(JSON.parse(localStorage.getItem(TITLE)) || [])
    const ranges = ref(JSON.parse(localStorage.getItem(RANGES)) || [])
    const sort = ref(JSON.parse(localStorage.getItem(SORT)) || '')
    const publishers = ref(JSON.parse(localStorage.getItem(PUBLISHERS)) || [])

    const getGenres = computed(() => genres.value)
    const getInputs = computed(() => inputs.value)
    const getRanges = computed(() => ranges.value)
    const getSort = computed(() => sort.value)
    const getPublishers = computed(() => publishers.value)

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

    const addPublisher = (val) => {
        publishers.value = [...publishers.value, val]
        updateLocalStorage(publishers.value, PUBLISHERS)
    }

    const delGenre = (val) => {
        genres.value = genres.value.filter(genre => genre !== val)
        updateLocalStorage(genres.value, GENRES);
    }

    const delPublisher = (val) => {
        publishers.value = publishers.value.filter(publisher => publisher !== val)
        updateLocalStorage(publishers.value, PUBLISHERS)
    }

    const clearFilters = () => {
        localStorage.removeItem(GENRES);
        localStorage.removeItem(TITLE);
        localStorage.removeItem(RANGES);
        localStorage.removeItem(SORT);
        localStorage.removeItem(PUBLISHERS);
        genres.value = [];
        inputs.value = [];
        ranges.value = [];
        sort.value = [];
        publishers.value = [];
    }

    return {
        getGenres,
        getInputs,
        getRanges,
        getSort,
        getPublishers,
        addGenre,
        addInputs,
        addRanges,
        addSort,
        addPublisher,
        delGenre,
        delPublisher,
        clearFilters
    }
})