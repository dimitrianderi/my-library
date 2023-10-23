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
    <div class="controls one">
      <app-control
        name="create"
        type="search"
        label="Путь к картинке"
        :error="errorImg"
        id="img"
        v-model="img"
      ></app-control>
    </div>
    <input type="hidden" name="id" :value="request.id" v-if="request">
    <hr />
    <div class="container">
      <button type="button" class="create__btn" @click="$emit('offModal')">
        Отмена
      </button>
      <span
        :class="['create__title', { error: isRequest === false }]"
        v-if="isRequest !== ''"
        >{{ isRequest ? isRequest : 'Ошибка!' }}</span
      >
      <button
        type="submit"
        class="create__btn"
        :disabled="isSubmitting || isRequest !== ''"
        @click="clearErrAuth"
        v-if="!request"
      >
        Добавить
      </button>
      <button
        type="submit"
        class="create__btn"
        :disabled="isSubmitting || isRequest !== ''"
        @click="clearErrAuth"
        v-else
      >
        Сохранить
      </button>
    </div>
    <hr>
    <button v-if="request" class="create__btn delete" type="button">Удалить</button>
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
  props: {
    request: Object
  },
  setup(props, { emit }) {
    const successStore = useSuccessStore()
    const requestStore = useRequestStore()
    const isRequest = computed(() => successStore.getSuccess)

    const submit = async (values) => {
      await requestStore.createBook(values)
      setTimeout(() => {
        emit('offModal')
      }, 1000)
    }

    const update = async (values) => {
      await requestStore.updateBook(values)
      setTimeout(() => {
        emit('offModal')
      }, 1000)
    }

    return {
      ...useCreateForm(submit, props.request, update),
      isRequest,
    }
  },
}
</script>

<style></style>
