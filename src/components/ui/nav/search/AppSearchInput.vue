<template>
  <input
    class="search__input"
    type="search"
    :placeholder="placeholder"
    maxlength="15"
    autocomplete="off"
    :autofocus="autofocus"
  />
</template>

<script>
export default {
    props: {
        placeholder: String,
        autofocus: Boolean
    }
}
</script>

<style></style>
