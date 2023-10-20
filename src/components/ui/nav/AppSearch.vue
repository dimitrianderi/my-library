<template>
  <h2 class="search__title">Поиск</h2>
  <div class="search">
    <app-search-image orient="left"></app-search-image>

    <form class="search__menu">
      <the-search-inputs></the-search-inputs>
      <the-search-ranges></the-search-ranges>
      <div class="search__menu-sort">
        <the-search-sort></the-search-sort>
        <the-search-reset></the-search-reset>
      </div>
      <div class="search__menu-filters">
        <the-search-publisher></the-search-publisher>
        <the-search-cover></the-search-cover>
        <the-search-new></the-search-new>
      </div>
    </form>
    
    <app-search-image orient="right"></app-search-image>
  </div>
</template>

<script>
import AppInput from '../../form/AppInput.vue'
import AppSearchImage from './search/AppSearchImage.vue'
import AppSearchInput from './search/AppSearchInput.vue'
import AppSearchRange from './search/AppSearchRange.vue'
import TheSearchInputs from './search/TheSearchInputs.vue'
import TheSearchRanges from './search/TheSearchRanges.vue'
import TheSearchReset from './search/TheSearchReset.vue'
import TheSearchSort from './search/TheSearchSort.vue'
import TheSearchPublisher from './search/TheSearchPublisher.vue'
import TheSearchCover from './search/TheSearchCover.vue'
import TheSearchNew from './search/TheSearchNew.vue'
export default {
  components: {
    AppSearchImage,
    AppSearchInput,
    AppSearchRange,
    AppInput,
    TheSearchInputs,
    TheSearchRanges,
    TheSearchReset,
    TheSearchSort,
    TheSearchPublisher,
    TheSearchCover,
    TheSearchNew,
  },
}
</script>

<style></style>
