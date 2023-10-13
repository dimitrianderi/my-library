<template>
  <form class="create__form" @submit.prevent="">
    <div class="controls">
      <app-control
        name="create"
        type="text"
        label="Название"
        v-model="name"
      ></app-control>
      <app-control
        name="create"
        type="text"
        label="Автор"
        v-model="author"
      ></app-control>
      <app-select
        name="create"
        label="Жанр"
        :options="sort_arr"
        v-model="sort"
      ></app-select>
      <app-select
        name="create"
        label="Издатель"
        :options="publisher_arr"
        v-model="publisher"
      ></app-select>
      <app-select
        name="create"
        label="Обложка"
        :options="cover_arr"
        v-model="cover"
      ></app-select>
      <app-control
        name="create"
        type="number"
        label="Страниц"
        v-model="pages"
      ></app-control>
      <app-control
        name="create"
        type="number"
        label="Тираж"
        v-model="circulation"
      ></app-control>
      <app-control
        name="create"
        type="number"
        label="Год"
        v-model="year"
      ></app-control>
      <app-control
        name="create"
        type="number"
        label="Цена"
        v-model="price"
      ></app-control>
      <app-control
        name="create"
        type="number"
        label="Штук"
        v-model="amount"
      ></app-control>
    </div>
    <div class="container">
      <button class="create__btn" @click="clearErrAuth">Отмена</button>
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
import { ref } from 'vue'
import AppControl from '../form/AppControl.vue'
import AppSelect from '../form/AppSelect.vue'
export default {
  components: { AppControl, AppSelect },
  setup() {
    const name = ref('')
    const author = ref('')
    const circulation = ref('')
    const year = ref('')
    const price = ref('')
    const amount = ref('')
    const sort = ref('default')
    const cover = ref('default')
    const publisher = ref('default')
    const sort_arr = [
      { name: 'Классика', value: 'classic' },
      { name: 'История', value: 'history' },
      { name: 'Философия', value: 'philosophy' },
      { name: 'Поэзия', value: 'poetry' },
      { name: 'Фантастика', value: 'fiction' },
      { name: 'Приключения', value: 'adventure' },
    ]
    const cover_arr = [
      { name: 'Твёрдая', value: 'hard' },
      { name: 'Мягкая', value: 'soft' },
    ]
    const publisher_arr = [
      { name: 'Азбука', value: 'azbuka' },
      { name: 'Эксмо', value: 'eksmo' },
      { name: 'Аст', value: 'ast' },
    ]

    return {
      name,
      author,
      circulation,
      year,
      sort,
      price,
      amount,
      sort_arr,
      cover,
      cover_arr,
      publisher,
      publisher_arr,
    }
  },
}
</script>

<style></style>
