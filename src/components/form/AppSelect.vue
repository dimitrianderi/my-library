<template>
  <div :class="`${name}__form-control`">
    <label :class="`${name}__label`" :for="id">{{ label }}:</label>
    <select :id="id" :class="[`${name}__select`, { error: error }]" :value="modelValue" @change="onChange">
      <option selected value="">Отсутствует</option>
      <option v-for="(option, key) in options" :value="option.value" :key="key">{{ option.name }}</option>
    </select>
  </div>
  <small :class="`${name}__errorText`">{{ error }}</small>
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
    label: String,
    modelValue: String,
    error: String,
    options: Array
  },
  emits: ['update:modelValue'],
  setup (_, {emit}) {
    const onChange = (event) => {
      emit('update:modelValue', event.target.value)
    }

    return {
      onChange
    }
  }
}
</script>

<style></style>
