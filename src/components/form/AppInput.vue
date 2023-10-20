<template>
  <input :class="`${block}__btn-${id}`" type="string" :id="id" :name="name" :value="value" />
</template>

<script>
export default {
    props: {
        block: String,
        id: String,
        value: String,
        name: String
    }
}
</script>

<style></style>
