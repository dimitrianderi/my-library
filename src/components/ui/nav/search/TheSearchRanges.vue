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
import { ref, watch } from 'vue'
import { useFilterStore } from '@/stores/FilterStore'
import AppSearchRange from '@/components/ui/nav/search/AppSearchRange.vue'
export default {
  setup() {
    const filterStore = useFilterStore()
    const ranges = ref([
      {
        title: 'Диапазон цен',
        min: '0',
        max: '4000',
        step: '10',
        minValue: ref(
          filterStore.getRanges.price
            ? filterStore.getRanges.price.min.toString()
            : '0'
            ),
            maxValue: ref(
          filterStore.getRanges.price
          ? filterStore.getRanges.price.max.toString()
          : '4000'
          ),
        },
        {
          title: 'Количество страниц',
        min: '0',
        max: '2000',
        step: '10',
        minValue: ref(
          filterStore.getRanges.pages
            ? filterStore.getRanges.pages.min.toString()
            : '0'
            ),
            maxValue: ref(
              filterStore.getRanges.pages
            ? filterStore.getRanges.pages.max.toString()
            : '2000'
            ),
      },
    ])
    
    watch(
      ranges,
      (newValue) => {
        const minPrice = Math.min(+newValue[0].minValue, +newValue[0].maxValue)
        const maxPrice = Math.max(+newValue[0].minValue, +newValue[0].maxValue)
        const price = { min: minPrice, max: maxPrice }
        const minPage = Math.min(+newValue[1].minValue, +newValue[1].maxValue)
        const maxPage = Math.max(+newValue[1].minValue, +newValue[1].maxValue)
        const pages = { min: minPage, max: maxPage }
        filterStore.addRanges({price, pages})
      },
      { deep: true }
      )
      
      watch(
        () => [filterStore.getRanges],
        ([newValues]) => {
          if (!newValues.price) {
            ranges.value[0].minValue = '0'
            ranges.value[0].maxValue = '4000'
          }
        if (!newValues.pages) {
          ranges.value[1].minValue = '0'
          ranges.value[1].maxValue = '2000'
        }
      },
      { deep: true }
      )
      
      return {
        ranges,
      }
    },
    components: { AppSearchRange },
}
</script>

<style></style>
