<template>
  <div class="search__sort">
    <label class="search__menu-title" for="sort">Сортировка</label>
    <select id="sort" v-model="sort">
      <option selected value="">Отсутствует</option>
      <option value="increasing(year)">Год: по возрастанию</option>
      <option value="decreasing(year)">Год: по убыванию</option>
      <option value="increasing(name)">Название: по возрастанию</option>
      <option value="decreasing(name)">Название: по убыванию</option>
    </select>
  </div>
</template>

<script>
import {useFilterStore} from '@/stores/FilterStore'
import AppInput from '@/components/form/AppInput.vue'
import { ref, watch } from 'vue'

export default {
  components: { AppInput },
  setup() {
    const filterStore = useFilterStore()
    const sort = ref(filterStore.getSort || '')

    watch(sort, (newValue) => {
      filterStore.addSort(newValue)
    })

    return {
      sort
    }
  }
}
</script>

<style></style>
