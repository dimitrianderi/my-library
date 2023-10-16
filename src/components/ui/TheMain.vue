<template>
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
      <request-items :requests="requests"></request-items>
    </div>
  </main>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useSuccessStore } from '@/stores/SuccessStore'
import { useRequestStore } from '@/stores/RequestStore'
import AppModal from './AppModal.vue'
import RequestCreate from '@/components/requests/RequestCreate.vue'
import RequestItems from '../requests/RequestItems.vue'
export default {
  setup() {
    const successStore = useSuccessStore()
    const requestStore = useRequestStore()
    const modal = ref(false)
    const onModal = () => {
      modal.value = true
    }

    const offModal = () => {
      modal.value = false
      successStore.updateSuccess(null)
    }

    onMounted(async () => {
      await requestStore.loadBooks()
    })

    const requests = computed(() => requestStore.getBooks)

    return {
      modal,
      onModal,
      offModal,
      requests,
    }
  },
  components: { AppModal, RequestCreate, RequestItems },
}
</script>

<style></style>
