<template>
  <div class="search__cover">
    <input
      class="search__checkbox"
      type="checkbox"
      name="cover"
      :id="key"
      :key="key"
      v-for="(_, key) in COVER_CODES"
    />
    <h2 class="search__menu-title">Обложка</h2>
    <div class="search__container">
      <label
        class="search__container-label search__cover-label"
        for="hard"
        id="hard-label"
      >
        <span class="search__container-text">Твердая</span>
      </label>
      <label
        class="search__container-label search__cover-label"
        for="soft"
        id="soft-label"
      >
        <span class="search__container-text">Мягкая</span>
      </label>
    </div>
  </div>
</template>

<script>
import { COVER_CODES } from '@/utils/covers'
export default {
  setup() {
    return {
      COVER_CODES,
    }
  },
}
</script>

<style></style>
