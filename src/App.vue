<template>
  <component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AuthLayout from './layouts/AuthLayout.vue'
import MainLayout from './layouts/MainLayout.vue'

export default {
  components: { AuthLayout, MainLayout },
  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout),
    }
  },
}
</script>

<style></style>
