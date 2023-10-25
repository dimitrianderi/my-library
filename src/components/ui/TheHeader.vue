<template>
  <header>
    <h1>Моя библиотека</h1>
    <div class="header"></div>
  </header>
  <div class="header__title">
    <span class="header__user">Здравствуйте, {{ user }}!</span>
    <span class="header__text" @click="logout">Выйти</span>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/AuthStore'

export default {
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    const user = authStore.getUser

    const logout = () => {
      authStore.logout()
      router.push('/auth')
    }

    return {
      logout,
      user
    }
  },
}
</script>

<style></style>
