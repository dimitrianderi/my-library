<template>
  <form class="auth__modal" @submit.prevent="onSubmit">
    <h2 class="auth__title">Регистрация</h2>
    <app-control
      name="auth"
      type="text"
      label="Имя"
      :error="errorName"
      id="name"
      v-model="name"
      autocomplete="off"
    ></app-control>
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
      Регистрироваться
    </button>
    <h2 class="auth__title"></h2>
  </form>
</template>

<script>
import { useRegForm } from '@/use/useRegForm'
import AppControl from '@/components/form/AppControl.vue'
export default {
  components: { AppControl },
    name: 'Reg',
    setup() {
    return {
      ...useRegForm(),
    }
  },
}
</script>

<style></style>
