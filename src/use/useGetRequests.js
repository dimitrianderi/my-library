import { computed, onMounted, ref } from 'vue'
import { useFilterStore } from '@/stores/FilterStore'
import { useRequestStore } from '@/stores/RequestStore'

const requestStore = useRequestStore()
const filterStore = useFilterStore()

const requestSort = {
    'increasing(year)': (a, b) => a.year - b.year,
    'decreasing(year)': (a, b) => b.year - a.year,
    'increasing(name)': (a, b) => a.title.localeCompare(b.title),
    'decreasing(name)': (a, b) => b.title.localeCompare(a.title),
}

export function useGetRequests() {
    const requests = computed(() =>
        requestStore.getBooks
            .filter((request) => {
                if (filterStore.getGenres && filterStore.getGenres.length) {
                    return filterStore.getGenres.includes(request.genre)
                }
                return requests
            })
            .filter((request) => {
                if (
                    filterStore.getInputs['title'] &&
                    filterStore.getInputs['title'].length
                ) {
                    return request.title
                        .toLowerCase()
                        .includes(filterStore.getInputs['title'].toLowerCase())
                }
                return request
            })
            .filter((request) => {
                if (
                    filterStore.getInputs['author'] &&
                    filterStore.getInputs['author'].length
                ) {
                    return request.author
                        .toLowerCase()
                        .includes(filterStore.getInputs['author'].toLowerCase())
                }
                return request
            })
            .filter((request) => {
                if (filterStore.getRanges.price) {
                    return (
                        request.price >= filterStore.getRanges.price.min &&
                        request.price <= filterStore.getRanges.price.max
                    )
                }
                return request
            })
            .filter((request) => {
                if (filterStore.getRanges.pages) {
                    return (
                        request.pages >= filterStore.getRanges.pages.min &&
                        request.pages <= filterStore.getRanges.pages.max
                    )
                }
                return request
            })
            .filter((request) => {
                if (filterStore.getPublishers && filterStore.getPublishers.length) {
                    return filterStore.getPublishers.includes(request.publisher)
                }
                return requests
            })
            .filter((request) => {
                if (filterStore.getCovers && filterStore.getCovers.length) {
                    return filterStore.getCovers.includes(request.cover)
                }
                return requests
            })
            .filter((request) => {
                if (filterStore.getPopular) {
                    return request.circulation > 20000
                }
                return requests
            })
            .sort((a, b) => {
                if (filterStore.getSort.length) {
                    return requestSort[filterStore.getSort](a, b)
                }
            })
    )

    return requests
}