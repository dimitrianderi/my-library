<template>
  <div class="search__publisher">
    <input
      class="search__checkbox"
      type="checkbox"
      name="publisher"
      :id="key"
      :key="key"
      v-for="(_, key) in PUBLISHER_CODES"
    />
    <h2 class="search__menu-title">Издательства</h2>
    <div class="search__container">
      <label class="search__container-label" for="azbuka" id="azbuka-label">
        <span class="search__container-text">Азбука</span>
      </label>
      <label class="search__container-label" for="eksmo" id="eksmo-label">
        <span class="search__container-text">Эксмо</span>
      </label>
      <label class="search__container-label" for="ast" id="ast-label">
        <span class="search__container-text">Аст</span>
      </label>
    </div>
  </div>
</template>

<script>
import { PUBLISHER_CODES } from '@/utils/publishers'
export default {
  setup() {
    return {
      PUBLISHER_CODES,
    }
  },
}
</script>

<style></style>
