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
      <span id="error">Тут пусто</span>
      <div class="main__container"></div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import AppModal from './AppModal.vue'
import RequestCreate from '../requests/RequestCreate.vue'
export default {
  setup() {
    const modal = ref(false)
    const onModal = () => {
        modal.value = true
    }

    const offModal = () => {
        modal.value = false
    }

    return {
        modal,
        onModal,
        offModal
    }
  },
  components: { AppModal, RequestCreate },
}
</script>

<style></style>
