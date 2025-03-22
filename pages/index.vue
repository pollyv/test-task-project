<template>
  <div class="login-page">
    <LoginForm @submit="handleLogin" :error="error" />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const error = ref<string | null>(null);

onMounted(() => {
  authStore.restoreSession();
});

const handleLogin = async ({ username, password }: { username: string; password: string }) => {
  try {
    await authStore.login(username, password);
  } catch (err: any) {
    error.value = err.message;
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>