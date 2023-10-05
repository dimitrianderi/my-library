<template>
  <form class="modal">
    <h2 class="title">Авторизация</h2>
    <div class="form-control">
      <label class="label" for="email">Почта:</label>
      <input class="input" type="email" id="email" v-model="email" />
    </div>
    <small class="error"></small>
    <div class="form-control">
      <label class="label" for="pass">Пароль:</label>
      <input class="input" type="password" id="pass" v-model="email" />
    </div>
    <small class="error"></small>
    <button class="btn" id="isInBasket">Войти</button>
    <h2 class="title"></h2>
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.modal {
  @include modal;

  .title {
    @include title;
  }

  .form-control {
    @include form-control;

    &:first-of-type {
      margin-top: 10px;
    }

    .label {
      @include label;
    }

    .input {
      @include input;
    }
  }

  .error {
    @include error;
    margin-right: 10px;
  }

  .btn {
    margin: 10px 0;
    align-self: center;
    @include btn;
  }
}
</style>
