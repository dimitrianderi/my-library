<template>
  <label class="nav__genre" :for="genre" :id="genre + '-label'">
    <img class="nav__genre__img" :src="genreImages[genre]" :alt="genre" />
    <span class="nav__genre__title">{{
      title.charAt(0).toUpperCase() + title.slice(1)
    }}</span>
  </label>
</template>

<script>
import classic from '@/assets/img/png/classic.png'
import adventure from '@/assets/img/png/adventure.png'
import fiction from '@/assets/img/png/fiction.png'
import history from '@/assets/img/png/history.png'
import philosophy from '@/assets/img/png/philosophy.png'
import poetry from '@/assets/img/png/poetry.png'

export default {
  props: {
    title: String,
    genre: String,
  },
  setup() {
    const genreImages = {
      classic: classic,
      adventure: adventure,
      fiction: fiction,
      history: history,
      philosophy: philosophy,
      poetry: poetry,
    }

    return {
      genreImages,
    }
  },
}
</script>

<style></style>
