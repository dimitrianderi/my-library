<template>
  <div :class="`${name}__form-control`">
    <label :class="`${name}__label`" :for="modelValue">{{ label }}:</label>
    <select :id="modelValue" :class="`${name}__select`" :value="modelValue" @change="onChange">
      <option selected value="default">Отсутствует</option>
      <option v-for="(option, key) in options" :value="option.value" :key="key">{{ option.name }}</option>
    </select>
  </div>
  <small :class="`${name}__errorText`">{{ errorEmail }}</small>
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
    label: String,
    modelValue: String,
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
