<template>
  <input
    class="search__input"
    type="search"
    :placeholder="placeholder"
    maxlength="15"
    autocomplete="off"
    :id="id"
    :autofocus="autofocus"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
    props: {
        placeholder: String,
        autofocus: Boolean,
        modelValue: String,
        id: String
    },
    emits: ['update:modelValue']
}
</script>

<style></style>
