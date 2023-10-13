<template>
  <div class="modal__backdrop" @click="offModal"></div>
  <div class="modal__layout">
    <h3 class="modal__title" v-if="title">{{ title }}</h3>
    <slot></slot>
    <h3 class="modal__title"></h3>
  </div>
</template>

<script>
export default {
  emits: ['offModal'],
  props: {
    title: {
      type: String,
    },
  },

  setup(_, { emit }) {
    const offModal = () => {
      emit('offModal')
    }

    return {
      offModal,
    }
  },
}
</script>

<style></style>
