<template>
  <form class="create__form" @submit.prevent="submit">
    <div class="controls">
      <app-control
        name="create"
        type="text"
        label="Название"
        :error="errorName"
        v-model="name"
      ></app-control>
      <app-control
        name="create"
        type="text"
        label="Автор"
        :error="errorAuthor"
        v-model="author"
      ></app-control>
      <app-select
        name="create"
        label="Жанр"
        :options="genre_arr"
        :error="errorGenre"
        v-model="genre"
      ></app-select>
      <app-select
        name="create"
        label="Издатель"
        :options="publisher_arr"
        :error="errorPublisher"
        v-model="publisher"
      ></app-select>
      <app-select
        name="create"
        label="Обложка"
        :options="cover_arr"
        :error="errorCover"
        v-model="cover"
      ></app-select>
      <app-control
        name="create"
        type="number"
        label="Страниц"
        :error="errorPages"
        v-model="pages"
      ></app-control>
      <app-control
        name="create"
        type="number"
        label="Тираж"
        :error="errorCirculation"
        v-model="circulation"
      ></app-control>
      <app-control
        name="create"
        type="number"
        label="Год"
        :error="errorYear"
        v-model="year"
      ></app-control>
      <app-control
        name="create"
        type="number"
        label="Цена"
        :error="errorPrice"
        v-model="price"
      ></app-control>
      <app-control
        name="create"
        type="number"
        label="Штук"
        :error="errorAmount"
        v-model="amount"
      ></app-control>
    </div>
    <div class="container">
      <button class="create__btn" @click="$emit('offModal')">Отмена</button>
      <button
        type="submit"
        class="create__btn"
        :disabled="isSubmitting"
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

export default {
  components: { AppControl, AppSelect },
  setup() {
    return {
      ...useCreateForm(),
    }
  },
}
</script>

<style></style>
