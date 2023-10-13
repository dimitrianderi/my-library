<template>
  <div :class="`${name}__form-control`">
    <label :class="`${name}__label`" :for="modelValue">{{ label }}:</label>
    <input
      :class="[`${name}__input`, { error: errorEmail }]"
      :type="type"
      :id="modelValue"
      autocomplete="off"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
  <small :class="`${name}__errorText`">{{ errorEmail }}</small>
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
    type: String,
    label: String,
    modelValue: String,
  },
  emits: ['update:modelValue'],
}
</script>

<style></style>
