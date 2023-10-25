<template>
  <div class="search__range">
    <h2 class="search__range-title">{{ title }}</h2>
    <div class="search__range-container">
      <span class="search__range-value">{{
        +minValue < +maxValue ? minValue : maxValue
      }}</span>
      <div class="search__range-content">
        <div
          class="search__range-content progress"
          :style="{
            width: progressWidth,
            left: progressLeft
          }"
        ></div>
        <input
          type="range"
          :min="min"
          :max="max"
          :value="minValue"
          :step="step"
          @input="$emit('update:minValue', $event.target.value)"
        />
        <input
          type="range"
          :min="min"
          :max="max"
          :value="maxValue"
          :step="step"
          @input="$emit('update:maxValue', $event.target.value)"
        />
      </div>
      <span class="search__range-value max">{{
        +maxValue > +minValue ? maxValue : minValue
      }}</span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  emits: ['update:minValue', 'update:maxValue'],
  props: {
    title: String,
    min: String,
    max: String,
    step: String,
    minValue: String,
    maxValue: String,
  },
  setup(props) {
    const progressWidth = computed(() => {
      return Math.abs(props.maxValue - props.minValue) / (props.max / 100) + '%'
    })

    const progressLeft = computed(() => {
      return (Math.min(props.minValue, props.maxValue) * 100) / props.max + '%'
    })

    return {
      progressWidth,
      progressLeft,
    }
  },
}
</script>

<style></style>
