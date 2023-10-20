<template>
  <div class="search__sort">
    <label class="search__menu-title" for="sort">Сортировка</label>
    <select id="sort">
      <option selected>Отсутствует</option>
      <option id="increasing(year)">Год: по возрастанию</option>
      <option id="decreasing(year)">Год: по убыванию</option>
      <option id="increasing(name)">Название: по возрастанию</option>
      <option id="decreasing(name)">Название: по убыванию</option>
    </select>
  </div>
</template>

<script>
import AppInput from '../../../form/AppInput.vue'
export default {
  components: { AppInput },
}
</script>

<style></style>
