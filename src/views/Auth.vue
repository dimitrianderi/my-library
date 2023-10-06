<template>
  <form class="modal" @submit.prevent="onSubmit">
    <h2 class="title">Авторизация</h2>
    <div class="form-control">
      <label class="label" for="email">Почта:</label>
      <input
        :class="['input', { error: errorEmail }]"
        type="email"
        id="email"
        v-model="email"
        autocomplete="on"
      />
    </div>
    <small class="errorText">{{ errorEmail }}</small>
    <div class="form-control">
      <label class="label" for="pass">Пароль:</label>
      <input
        :class="['input', { error: errorPass }]"
        type="password"
        id="pass"
        v-model="pass"
        autocomplete="off"
      />
    </div>
    <small class="errorText">{{ errorPass }}</small>
    <button type="submit" class="btn" id="isInBasket" :disabled="isSubmitting">Войти</button>
    <h2 class="title"></h2>
  </form>
</template>

<script>
import useLoginForm from '@/use/useLoginForm'

export default {
  setup() {
    return {
      ...useLoginForm(),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.form-control {
  &:first-of-type {
    margin-top: 10px;
  }
}

.btn {
  margin: 10px 0;
  align-self: center;
}
</style>
