<template>
  <div class="search__btn">
    <span class="search__btn-reset" @click="clearMenu">Сброс</span>
  </div>
</template>

<script>
import { useFilterStore } from '@/stores/FilterStore'
import AppInput from '@/components/form/AppInput.vue'

export default {
  setup() {
    const filterStore = useFilterStore()
    
    const clearMenu = () => filterStore.clearFilters()
    
    return {
      clearMenu,
    }
  },
  components: { AppInput },
}
</script>

<style></style>
