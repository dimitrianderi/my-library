<template>
  <div class="search__ranges">
    <app-search-range
      title="Диапазон цен"
      :minValue="0"
      :maxValue="500000"
      :step="1000"
    ></app-search-range>
    <app-search-range
      title="Количество страниц"
      :minValue="0"
      :maxValue="2000"
      :step="10"
    ></app-search-range>
  </div>
</template>

<script>
import AppSearchRange from './AppSearchRange.vue'
export default {
  components: { AppSearchRange },}
</script>

<style></style>
