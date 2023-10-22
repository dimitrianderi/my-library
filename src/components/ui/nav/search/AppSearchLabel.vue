<template>
  <label
    :class="['search__container-label', { secondClass }]"
    :for="id"
    :id="`${id}-label`"
    @click="$emit('click', id)"
  >
    <span class="search__container-text">{{ title[0].toUpperCase() + title.slice(1) }}</span>
  </label>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    secondClass: String,
  },
  emits: ['click'],
}
</script>

<style></style>
