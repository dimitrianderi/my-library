<template>
  <div class="search__range">
    <h2 class="search__range-title">{{ title }}</h2>
    <div class="search__range-container">
      <span class="search__range-value">{{ minValue }}</span>
      <div class="search__range-content">
        <div class="search__range-content-progress"></div>
        <input type="range" min="0" :max="maxValue" :value="minValue" :step="step" />
        <input type="range" min="0" :max="maxValue" :value="maxValue" :step="step" />
      </div>
      <span class="search__range-value max">{{ maxValue }}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        minValue: Number,
        maxValue: Number,
        step: Number
    }
}
</script>

<style></style>
