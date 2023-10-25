<template>
  <the-nav></the-nav>
  <div class="main__title">
    <span>Список ваших книг</span>
    <span class="cross" @click="onModal"></span>
  </div>
  <main class="main">
    <div class="main__books">
      <app-loader v-if="loader"></app-loader>
      <request-items :requests="requests" v-else></request-items>
    </div>
  </main>
  <teleport to="body">
    <app-modal v-if="modal" @offModal="offModal" title="Добавить книгу">
      <request-create @offModal="offModal"></request-create>
    </app-modal>
  </teleport>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useSuccessStore } from '@/stores/SuccessStore'
import { useRequestStore } from '@/stores/RequestStore'
import { useGetRequests } from '@/use/useGetRequests'
import AppModal from '@/components/ui/AppModal.vue'
import RequestCreate from '@/components/requests/RequestCreate.vue'
import RequestItems from '@/components/requests/RequestItems.vue'
import AppLoader from '@/components/ui/AppLoader.vue'
import TheNav from '@/components/ui/TheNav.vue'
export default {
  setup() {
    const successStore = useSuccessStore()
    const requestStore = useRequestStore()
    const modal = ref(false)
    const loader = ref(false)

    const onModal = () => {
      modal.value = true
    }

    const offModal = () => {
      modal.value = false
      successStore.updateSuccess('')
    }

    onMounted(async () => {
      loader.value = true
      await requestStore.loadBooks()
      loader.value = false
    })

    const requests = useGetRequests()
    
    return {
      modal,
      onModal,
      offModal,
      loader,
      requests,
    }
  },
  components: { AppModal, RequestCreate, RequestItems, AppLoader, TheNav },
}
</script>

<style></style>
