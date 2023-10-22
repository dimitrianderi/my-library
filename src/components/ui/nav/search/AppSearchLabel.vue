<template>
  <label class="search__container-label" :for="id" :id="`${id}-label`" @click="$emit('click', id)">
    <span class="search__container-text">{{ title }}</span>
  </label>
</template>

<script>
export default {
    props: {
        id: String,
        title: String
    },
    emits: ['click']
}
</script>

<style></style>
