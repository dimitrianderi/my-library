<template>
  <div class="search__ranges">
    <app-search-range
      :title="range.title"
      :min="range.min"
      :max="range.max"
      :step="range.step"
      v-for="(range, key) in ranges"
      :key="key"
      v-model:minValue="range.minValue"
      v-model:maxValue="range.maxValue"
    ></app-search-range>
  </div>
</template>

<script>
import { useFilterStore } from '@/stores/FilterStore'
import { ref, watch } from 'vue'
import AppSearchRange from './AppSearchRange.vue'
export default {
  components: { AppSearchRange },
  setup() {
    const filterStore = useFilterStore()
    const ranges = ref([
      {
        title: 'Диапазон цен',
        min: '0',
        max: '4000',
        step: '10',
        minValue: (filterStore.getRanges.price ? filterStore.getRanges.price.min.toString() : ref('0')),
        maxValue: (filterStore.getRanges.price ? filterStore.getRanges.price.max.toString() : ref('4000'))
      },
      {
        title: 'Количество страниц',
        min: '0',
        max: '2000',
        step: '10',
        minValue: (filterStore.getRanges.pages ? filterStore.getRanges.pages.min.toString() : ref('0')),
        maxValue: (filterStore.getRanges.pages ? filterStore.getRanges.pages.max.toString() : ref('2000')),
      },
    ])

    watch(ranges, (newValue) => {
      const minPrice = Math.min(+newValue[0].minValue, +newValue[0].maxValue)
      const maxPrice = Math.max(+newValue[0].minValue, +newValue[0].maxValue)
      const price = {min: minPrice, max: maxPrice}
      const minPage = Math.min(+newValue[1].minValue, +newValue[1].maxValue)
      const maxPage = Math.max(+newValue[1].minValue, +newValue[1].maxValue)
      const pages = {min: minPage, max: maxPage}
      const ranges = {price, pages}
      filterStore.addRanges(ranges)
    }, {deep: true})

    return {
      ranges,
    }
  },
}
</script>

<style></style>
