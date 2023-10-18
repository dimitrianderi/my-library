<template>
  <nav class="nav">
    <app-checkbox v-for="(_, key) in GENRE_CODES" :key="key" :id="key"></app-checkbox>

    <div class="nav__genres">
      <app-genre v-for="(genre, key) in GENRE_CODES" :key="key" :title="genre" :genre="key"></app-genre>
    </div>
  </nav>
</template>

<script>
import { GENRE_CODES } from '@/utils/genres.js'
import AppCheckbox from '../form/AppCheckbox.vue'
import AppGenre from '@/components/ui/nav/AppGenre.vue'
export default {
  components: { AppCheckbox, AppGenre },
  setup() {
    return {
      GENRE_CODES,
    }
  },
}
</script>

<style></style>
