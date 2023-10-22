<template>
  <the-nav></the-nav>
  <div class="main__title">
    <span>Список ваших книг</span>
    <teleport to="body">
      <app-modal v-if="modal" @offModal="offModal" title="Добавить книгу">
        <request-create @offModal="offModal"></request-create>
      </app-modal>
    </teleport>
    <span class="cross" @click="onModal"></span>
  </div>
  <main class="main">
    <div class="main__books">
      <app-loader v-if="loader"></app-loader>
      <request-items :requests="requests" v-else></request-items>
    </div>
  </main>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useFilterStore } from '@/stores/FilterStore'
import { useSuccessStore } from '@/stores/SuccessStore'
import { useRequestStore } from '@/stores/RequestStore'
import AppModal from '@/components/ui/AppModal.vue'
import RequestCreate from '@/components/requests/RequestCreate.vue'
import RequestItems from '../requests/RequestItems.vue'
import AppLoader from './AppLoader.vue'
import TheNav from './TheNav.vue'
export default {
  setup() {
    const successStore = useSuccessStore()
    const requestStore = useRequestStore()
    const filterStore = useFilterStore()
    const modal = ref(false)
    const loader = ref(false)

    const requestSort = {
      'increasing(year)': (a, b) => a.year - b.year,
      'decreasing(year)': (a, b) => b.year - a.year,
      'increasing(name)': (a, b) => a.title.localeCompare(b.title),
      'decreasing(name)': (a, b) => b.title.localeCompare(a.title),
    }

    const onModal = () => {
      modal.value = true
    }

    const offModal = () => {
      modal.value = false
      successStore.updateSuccess(null)
    }

    onMounted(async () => {
      loader.value = true
      await requestStore.loadBooks()
      loader.value = false
    })

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

    return {
      modal,
      onModal,
      offModal,
      requests,
      loader,
    }
  },
  components: { AppModal, RequestCreate, RequestItems, AppLoader, TheNav },
}
</script>

<style></style>
