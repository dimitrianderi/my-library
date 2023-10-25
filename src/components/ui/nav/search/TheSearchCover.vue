<template>
  <div class="search__cover">
    <app-checkbox
      v-for="cover in coversStore"
      :key="cover.id"
      :id="cover.id"
      name="cover"
      v-model="cover.value.value"
      @input="toggleCover(cover.id)"
    ></app-checkbox>
    <h2 class="search__menu-title">Обложка</h2>
    <div class="search__container">
      <app-search-label
        v-for="(cover, key) in COVER_CODES"
        :key="key"
        :id="key"
        class="search__cover-label"
        :title="cover"
      ></app-search-label>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useFilterStore } from '@/stores/filterStore'
import { COVER_CODES } from '@/utils/covers'
import AppSearchLabel from '@/components/ui/nav/search/AppSearchLabel.vue'
import AppCheckbox from '@/components/form/AppCheckbox.vue'

export default {
  setup() {
    const filterStore = useFilterStore()
    
    const coversStore = [
      {
        id: 'soft',
        value: ref(filterStore.getCovers.includes('soft') || false),
      },
      {
        id: 'hard',
        value: ref(filterStore.getCovers.includes('hard') || false),
      },
    ]

    watch(
      () => [filterStore.getCovers],
      ([newValue]) => {
        if (!newValue.length) {
          coversStore.forEach((cover) => {
            cover.value.value = false
          })
        }
      }
      )
      
      const toggleCover = (cover) => {
      filterStore.getCovers.includes(cover)
      ? filterStore.delCover(cover)
      : filterStore.addCover(cover)
    }

    return {
      COVER_CODES,
      coversStore,
      toggleCover
    }
  },
  components: { AppSearchLabel, AppCheckbox },
}
</script>

<style></style>
