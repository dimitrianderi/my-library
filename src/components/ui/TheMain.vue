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
import AppModal from './AppModal.vue'
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

    const requests = computed(() => requestStore.getBooks
      .filter((request) => {
        if (filterStore.getGenres && filterStore.getGenres.length) {
          return filterStore.getGenres.includes(request.genre)
        }
        return requests
      })
      .filter((request) => {
        if (filterStore.getInputs['title'] && filterStore.getInputs['title'].length) {
          return request.title.toLowerCase().includes(filterStore.getInputs['title'].toLowerCase())
        }
        return request
      })
      .filter((request) => {
        if (filterStore.getInputs['author'] && filterStore.getInputs['author'].length) {
          return request.author.toLowerCase().includes(filterStore.getInputs['author'].toLowerCase())
        }
        return request
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
