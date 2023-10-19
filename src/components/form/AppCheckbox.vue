<template>
  <input class="nav__genres__btn" type="checkbox" name="btn" :id="id" :checked="genresStore.includes(id)"/>
</template>

<script>

export default {
  props: {
    id: String,
    key: String,
    genresStore: Array
  },
}
</script>

<style></style>
