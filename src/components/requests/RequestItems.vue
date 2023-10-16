<template>
  <div class="items__container" v-if="requests.length">
    <request-item
    v-for="request in requests"
    :key="request.id"
    :request="request"
    ></request-item>
  </div>
  <span id="error" v-else>Книг нет</span>
</template>

<script>
import RequestItem from './RequestItem.vue'
export default {
  components: { RequestItem },
  props: {
    requests: Array,
  },
}
</script>

<style></style>
