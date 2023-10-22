<template>
  <div class="search__publisher">
    <app-checkbox
      v-for="publisher in publishersStore"
      :key="publisher.id"
      :id="publisher.id"
      name="publisher"
      v-model="publisher.value.value"
      @input="togglePublisher(publisher.id)"
    ></app-checkbox>
    <h2 class="search__menu-title">Издательства</h2>
    <div class="search__container">
      <app-search-label
        v-for="(publisher, key) in PUBLISHER_CODES"
        :id="key"
        :key="key"
        :title="publisher"
      ></app-search-label>
    </div>
  </div>
</template>

<script>
import { useFilterStore } from '@/stores/filterStore'
import { PUBLISHER_CODES } from '@/utils/publishers'
import AppSearchLabel from '@/components/ui/nav/search/AppSearchLabel.vue'
import AppCheckbox from '@/components/form/AppCheckbox.vue'
import { ref, watch } from 'vue'
export default {
  components: { AppSearchLabel, AppCheckbox },
  setup() {
    const filterStore = useFilterStore()

    const publishersStore = [
      {
        id: 'azbuka',
        value: ref(filterStore.getPublishers.includes('azbuka') || false),
      },
      {
        id: 'eksmo',
        value: ref(filterStore.getPublishers.includes('eksmo') || false),
      },
      {
        id: 'ast',
        value: ref(filterStore.getPublishers.includes('ast') || false),
      },
    ]

    watch(
      () => [filterStore.getPublishers],
      ([newValue]) => {
        if (!newValue.length) {
          publishersStore.forEach((publisher) => {
            publisher.value.value = false
          })
        }
      }
    )

    const togglePublisher = (publisher) => {
      filterStore.getPublishers.includes(publisher)
        ? filterStore.delPublisher(publisher)
        : filterStore.addPublisher(publisher)
    }

    return {
      PUBLISHER_CODES,
      publishersStore,
      togglePublisher,
    }
  },
}
</script>

<style></style>
