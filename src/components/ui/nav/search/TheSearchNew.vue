<template>
  <div class="search__new">
    <input
      class="search__checkbox"
      type="checkbox"
      name="cover"
      id="new-input"
      v-model="popular"
      @input="togglePopular"
    />
    <h2 class="search__menu-title">Хиты</h2>
    <div class="search__container">
      <label class="search__container-label search__new-label" for="new-input">
        <span class="search__container-text">Показать</span>
      </label>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import {useFilterStore} from '@/stores/FilterStore'

export default {
  setup() {
    const filterStore = useFilterStore()

    const popular = ref(filterStore.getPopular || false)

    watch(
      () => [filterStore.getPopular],
      ([newValue]) => {
        if (!newValue) {
          popular.value = false
        }
      }
    )

    const togglePopular = () => {
      filterStore.getPopular ? filterStore.addPopular(false) : filterStore.addPopular(true)
    }

    return {
      popular,
      togglePopular
    }
  }
}
</script>

<style></style>
