<template>
  <div :class="`${name}__form-control`">
    <label :class="`${name}__label`" :for="id">{{ label }}:</label>
    <input
      :class="[`${name}__input`, { error: error }]"
      :type="type"
      :id="id"
      autocomplete="off"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      maxlength="70"
    />
  </div>
  <small :class="`${name}__errorText`">{{ error }}</small>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    type: String,
    label: String,
    error: String,
    modelValue: String,
  },
  emits: ['update:modelValue'],
}
</script>

<style></style>
