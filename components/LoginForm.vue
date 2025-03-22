<template>
  <form @submit.prevent="onSubmit" class="login-form">
    <h2>Вход</h2>
    <input v-model="username" type="text" placeholder="Логин" required />
    <input v-model="password" type="password" placeholder="Пароль" required />
    <button type="submit">Войти</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script setup lang="ts">
const username = ref('');
const password = ref('');

defineProps<{
  error: string | null;
}>();

const emit = defineEmits(['submit']);

const onSubmit = () => {
  emit('submit', { username: username.value, password: password.value });
};
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;

  .error {
    color: red;
    text-align: center;
  }
}
</style>