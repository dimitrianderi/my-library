<template>
  <input
    class="search__checkbox nav__genres__btn"
    type="checkbox"
    :id="id"
    :name="name"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
  />
</template>

<script>
export default {
  props: {
    id: String,
    key: String,
    name: String,
    modelValue: Boolean
  },
  emits: ['update:modelValue']
}
</script>

<style></style>
