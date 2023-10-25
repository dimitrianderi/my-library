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
import RequestItem from '@/components/requests/RequestItem.vue'
export default {
  props: {
    requests: Array,
  },
  components: { RequestItem },
}
</script>

<style></style>
