<template>
  <nav class="nav">
    <app-checkbox
      v-for="genre in genresStore"
      :key="genre.id"
      :id="genre.id"
      name="genres"
      v-model="genre.value.value"
      @input="toggleGenre(genre.id)"
    ></app-checkbox>
    <div class="nav__genres">
      <app-genre
        v-for="(genre, key) in GENRE_CODES"
        :key="key"
        :title="genre"
        :genre="key"
      ></app-genre>
    </div>
    <app-search></app-search>
  </nav>
</template>

<script>
import { ref, watch } from 'vue'
import { useFilterStore } from '@/stores/FilterStore'
import { GENRE_CODES } from '@/utils/genres.js'
import AppCheckbox from '@/components/form/AppCheckbox.vue'
import AppGenre from '@/components/ui/nav/AppGenre.vue'
import AppSearch from '@/components/ui/nav/AppSearch.vue'

export default {
  components: { AppCheckbox, AppGenre, AppSearch },
  setup() {
    const filterStore = useFilterStore()

    const genresStore = [
      {id: 'classic', value: ref(filterStore.getGenres.includes('classic') || false)},
      {id: 'history', value: ref(filterStore.getGenres.includes('history') || false)},
      {id: 'philosophy', value: ref(filterStore.getGenres.includes('philosophy') || false)},
      {id: 'poetry', value: ref(filterStore.getGenres.includes('poetry') || false)},
      {id: 'fiction', value: ref(filterStore.getGenres.includes('fiction') || false)},
      {id: 'adventure', value: ref(filterStore.getGenres.includes('adventure') || false)},
    ]

    watch(
      () => [filterStore.getGenres],
      ([newValue]) => {
        if (!newValue.length) {
          genresStore.forEach((genre) => {
            genre.value.value = false
          })
        }
      }
    )

    const toggleGenre = (genre) => {
      filterStore.getGenres.includes(genre)
        ? filterStore.delGenre(genre)
        : filterStore.addGenre(genre)
    }

    return {
      GENRE_CODES,
      genresStore,
      toggleGenre,
    }
  },
}
</script>

<style></style>
