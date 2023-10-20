<template>
  <nav class="nav">
    <app-checkbox
      v-for="(_, key) in GENRE_CODES"
      :key="key"
      :id="key"
      :genresStore="genresStore"
    ></app-checkbox>
    <div class="nav__genres">
      <app-genre
        v-for="(genre, key) in GENRE_CODES"
        :key="key"
        :title="genre"
        :genre="key"
        @click="toggleGenre"
      ></app-genre>
    </div>
    <app-search></app-search>
  </nav>
</template>

<script>
import { useFilterStore } from '@/stores/FilterStore'
import { GENRE_CODES } from '@/utils/genres.js'
import AppCheckbox from '@/components/form/AppCheckbox.vue'
import AppGenre from '@/components/ui/nav/AppGenre.vue'
import AppSearch from './nav/AppSearch.vue'

export default {
  components: { AppCheckbox, AppGenre, AppSearch },
  setup() {
    const filterStore = useFilterStore()

    const genresStore = filterStore.getGenres

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
