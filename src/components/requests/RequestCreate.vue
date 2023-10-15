<template>
  <form class="create__form" @submit.prevent="onSubmit">
    <div class="controls">
      <app-control
        name="create"
        type="text"
        label="Название"
        :error="errorName"
        id="title"
        v-model="title"
      ></app-control>
      <app-control
        name="create"
        type="text"
        label="Автор"
        :error="errorAuthor"
        id="author"
        v-model="author"
      ></app-control>
      <app-select
        name="create"
        label="Жанр"
        :options="genre_arr"
        :error="errorGenre"
        id="genre"
        v-model="genre"
      ></app-select>
      <app-select
        name="create"
        label="Издатель"
        :options="publisher_arr"
        :error="errorPublisher"
        id="publisher"
        v-model="publisher"
      ></app-select>
      <app-select
        name="create"
        label="Обложка"
        :options="cover_arr"
        :error="errorCover"
        id="cover"
        v-model="cover"
      ></app-select>
      <app-control
        name="create"
        type="number"
        label="Страниц"
        :error="errorPages"
        id="pages"
        v-model="pages"
      ></app-control>
      <app-control
        name="create"
        type="number"
        label="Тираж"
        :error="errorCirculation"
        id="circulation"
        v-model="circulation"
      ></app-control>
      <app-control
        name="create"
        type="number"
        label="Год"
        :error="errorYear"
        id="year"
        v-model="year"
      ></app-control>
      <app-control
        name="create"
        type="number"
        label="Цена"
        :error="errorPrice"
        id="price"
        v-model="price"
      ></app-control>
      <app-control
        name="create"
        type="number"
        label="Штук"
        :error="errorAmount"
        id="amount"
        v-model="amount"
      ></app-control>
    </div>
    <hr />
    <div class="container">
      <button type="button" class="create__btn" @click="$emit('offModal')">
        Отмена
      </button>
      <span
        :class="['create__title', { error: isRequest === false }]"
        v-if="isRequest !== null"
        >{{ isRequest ? 'Книга создана!' : 'Ошибка!' }}</span
      >
      <button
        type="submit"
        class="create__btn"
        :disabled="isSubmitting || isRequest"
        @click="clearErrAuth"
      >
        Добавить
      </button>
    </div>
  </form>
</template>

<script>
import AppControl from '@/components/form/AppControl.vue'
import AppSelect from '@/components/form/AppSelect.vue'
import { useCreateForm } from '@/use/useCreateForm'
import { useRequestStore } from '@/stores/RequestStore'
import { useSuccessStore } from '@/stores/SuccessStore'
import { computed } from 'vue'

export default {
  components: { AppControl, AppSelect },
  emits: ['offModal'],
  setup(_, { emit }) {
    const successStore = useSuccessStore()
    const requestStore = useRequestStore()
    const isRequest = computed(() => successStore.getSuccess)

    const submit = async (values) => {
      await requestStore.createBook(values)
      setTimeout(() => {
        emit('offModal')
      }, 1000)
      if (isRequest) {
        title.value = ''
        author.value = ''
        genre.value = ''
        publisher.value = ''
        cover.value = ''
        pages.value = ''
        circulation.value = ''
        year.value = ''
        price.value = ''
        amount.value = ''
      }
    }
    return {
      ...useCreateForm(submit),
      isRequest,
    }
  },
}
</script>

<style></style>
