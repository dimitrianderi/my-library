<template>
  <form class="auth__modal" @submit.prevent="onSubmit">
    <h2 class="auth__title">Авторизация</h2>
    <app-control
        name="auth"
        type="email"
        label="Почта"
        :error="errorEmail"
        id="email"
        v-model="email"
        autocomplete="on"
      ></app-control>
    <app-control
        name="auth"
        type="password"
        label="Пароль"
        :error="errorPass"
        id="pass"
        v-model="pass"
        autocomplete="on"
      ></app-control>
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
import AppControl from '@/components/form/AppControl.vue'

export default {
  components: { AppControl },
  setup() {
    return {
      ...useLoginForm(),
    }
  },
  name: 'Auth',
}
</script>

<style></style>
