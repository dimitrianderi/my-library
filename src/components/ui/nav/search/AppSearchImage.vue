<template>
  <div class="search__wrapper">
    <img class="search__img" :src="imageNames[orient]" alt="Книги" />
  </div>
</template>

<script>
import right from '@/assets/img/books-right.jpg'
import left from '@/assets/img/books-left.jpg'

export default {
  props: {
    orient: String,
  },
  setup() {
    const imageNames = {
      right: right,
      left: left,
    }

    return {
      imageNames,
    }
  },
}
</script>

<style></style>
