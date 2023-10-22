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
import AppInput from '@/components/form/AppInput.vue'
import AppSearchImage from '@/components/ui/nav/search/AppSearchImage.vue'
import AppSearchInput from '@/components/ui/nav/search/AppSearchInput.vue'
import AppSearchRange from '@/components/ui/nav/search/AppSearchRange.vue'
import TheSearchInputs from '@/components/ui/nav/search/TheSearchInputs.vue'
import TheSearchRanges from '@/components/ui/nav/search/TheSearchRanges.vue'
import TheSearchReset from '@/components/ui/nav/search/TheSearchReset.vue'
import TheSearchSort from '@/components/ui/nav/search/TheSearchSort.vue'
import TheSearchPublisher from '@/components/ui/nav/search/TheSearchPublisher.vue'
import TheSearchCover from '@/components/ui/nav/search/TheSearchCover.vue'
import TheSearchNew from '@/components/ui/nav/search/TheSearchNew.vue'
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
