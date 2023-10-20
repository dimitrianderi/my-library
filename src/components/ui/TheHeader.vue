<template>
  <header>
    <h1>Моя библиотека</h1>
    <div class="header"></div>
  </header>
  <div class="title">
    <span class="header__user">Здравствуйте, {{ user }}!</span>
    <span class="header__text" @click="logout">Выйти</span>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/AuthStore'
import { useRouter } from 'vue-router'

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

<style lang="scss" scoped>
@import '@/styles/index.scss';
.title {
  @include title(end, 90%, $dark);
  margin: 0 auto;
  border-radius: 15px 15px 0 0;
  text-shadow: 0 0 5px $gold;
  display: flex;
  justify-content: space-between;

  & .header__text {
    transition: all 0.5s ease;

    &:hover {
      color: $gold;
      text-shadow: 0 0 10px $white;
      cursor: pointer;
    }
  }

  & .header__user {
    color: $white;
    font-weight: 100;
    text-shadow: none;
  }
}
</style>
