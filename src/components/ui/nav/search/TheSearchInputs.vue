<template>
  <div class="search__inputs">
    <app-search-input
      :placeholder="input.placeholder"
      :autofocus="input.autofocus"
      v-for="(input, key) in inputs"
      :key="key"
      v-model="input.value"
    ></app-search-input>
  </div>
</template>

<script>
import { useFilterStore } from '@/stores/FilterStore'
import { ref, watch } from 'vue'
import AppSearchInput from './AppSearchInput.vue'
export default {
  components: { AppSearchInput },
  setup() {
    const filterStore = useFilterStore()

    const inputs = ref([
      { placeholder: 'по произведению', autofocus: true, value: ref(filterStore.getInputs['title'] || '') },
      { placeholder: 'по автору', autofocus: false, value: ref(filterStore.getInputs['author'] || '') },
    ])

      watch (inputs, (newValue) => {
        const title = newValue[0].value
        const author = newValue[1].value
        const inputs = {title, author}
        filterStore.addInputs(inputs)
      }, {deep: true})

    return {
      inputs,
    }
  },
}
</script>

<style></style>
