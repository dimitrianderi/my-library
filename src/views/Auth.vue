<template>
  <form class="auth__modal" @submit.prevent="onSubmit">
    <h2 class="auth__title">Авторизация</h2>
    <div class="auth__form-control">
      <label class="auth__label" for="email">Почта:</label>
      <input
        :class="['auth__input', { error: errorEmail }]"
        type="email"
        id="email"
        v-model="email"
        autocomplete="on"
      />
    </div>
    <small class="auth__errorText">{{ errorEmail }}</small>
    <div class="auth__form-control">
      <label class="auth__label" for="pass">Пароль:</label>
      <input
        :class="['auth__input', { error: errorPass }]"
        type="password"
        id="pass"
        v-model="pass"
        autocomplete="off"
      />
    </div>
    <small class="auth__errorText">{{ errorPass }}</small>
    <button
      type="submit"
      class="auth__btn"
      :disabled="isSubmitting"
      @click="clearErrAuth"
    >
      Войти
    </button>
    <h2 class="auth__title"></h2>
  </form>
</template>

<script>
import { useLoginForm } from '@/use/useLoginForm'

export default {
  setup() {
    return {
      ...useLoginForm(),
    }
  },
}
</script>

<style></style>
