<template>
  <div class="search__inputs">
    <app-search-input
      placeholder="по произведению"
      :autofocus="true"
    ></app-search-input>
    <app-search-input
      placeholder="по автору"
      :autofocus="false"
    ></app-search-input>
  </div>
</template>

<script>
import AppSearchInput from './AppSearchInput.vue'
export default {
  components: { AppSearchInput },}
</script>

<style></style>
