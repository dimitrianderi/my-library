<template>
  <div class="book">
    <div class="book__img">
      <img class="book__image" :src="request.img" alt="book" />
    </div>
    <div class="book__info">
      <span class="book__title">{{ request.title }}</span>
      <span class="book__text"
        >автор: <span class="book__desc">{{ request.author }}</span></span
      >
      <span class="book__text"
        >жанр: <span class="book__desc">{{ genres(request.genre) }}</span></span
      >
      <span class="book__text"
        >страниц: <span class="book__desc">{{ request.pages }}</span></span
      >
      <span class="book__text line"
        >обложка:
        <span class="book__desc">{{ covers(request.cover) }}</span></span
      >
      <hr class="hr" />
      <span class="book__text"
        >издательство:
        <span class="book__desc">{{
          publishers(request.publisher)
        }}</span></span
      >
      <span class="book__text"
        >тираж: <span class="book__desc">{{ request.circulation }}</span></span
      >
      <span class="book__text"
        >год: <span class="book__desc">{{ request.year }}</span></span
      >
      <span class="book__text"
        >Штук: <span class="book__text">{{ request.amount }}</span> шт.</span
      >
      <span class="book__price">{{ request.price }} руб.</span>
      <div class="book__btn" @click="onModal">Изменить</div>
    </div>
  </div>
  <teleport to="body">
    <app-modal v-if="modal" @offModal="offModal" title="Редактировать книгу">
      <request-create @offModal="offModal" :request="request"></request-create>
    </app-modal>
  </teleport>
</template>

<script>
import { ref } from 'vue'
import { useSuccessStore } from '@/stores/SuccessStore'
import AppModal from '@/components/ui/AppModal.vue'
import RequestCreate from '@/components/requests/RequestCreate.vue'
import { publishers } from '@/utils/publishers.js'
import { covers } from '@/utils/covers.js'
import { genres } from '@/utils/genres.js'
export default {
  props: {
    request: Object,
  },
  setup() {
    const modal = ref(false)
    const successStore = useSuccessStore()

    const onModal = () => (modal.value = true)
    const offModal = () => {
      modal.value = false
      successStore.updateSuccess('')
    }

    return {
      publishers,
      covers,
      genres,
      modal,
      onModal,
      offModal,
    }
  },
  components: { AppModal, RequestCreate },
}
</script>

<style></style>
