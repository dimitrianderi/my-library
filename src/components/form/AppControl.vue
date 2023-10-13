<template>
  <div :class="`${name}__form-control`">
    <label :class="`${name}__label`" :for="modelValue">{{ label }}:</label>
    <input
      :class="[`${name}__input`, { error: error }]"
      :type="type"
      :id="modelValue"
      autocomplete="off"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      maxlength="25"
    />
  </div>
  <small :class="`${name}__errorText`">{{ error }}</small>
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
    type: String,
    label: String,
    error: String,
    modelValue: String,
  },
  emits: ['update:modelValue'],
}
</script>

<style></style>
