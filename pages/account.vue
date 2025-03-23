<template>
  <div class="account-page">
    <h1>Личный кабинет</h1>
    <button @click="logout" class="logout-btn">Выход</button>
    <Filters v-model:date="filterDate" v-model:status="filterStatus" />
    <ProductTable :products="filteredProducts" />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import type { Product } from '~/types/product';

definePageMeta({ middleware: 'auth' });
const authStore = useAuthStore();

const products = ref<Product[]>([]);
const filterDate = ref('');
const filterStatus = ref<string[]>([]);

onMounted(async () => {
  products.value = await $fetch('/api/products');
});

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesDate = filterDate.value ? product.date_created.includes(filterDate.value) : true; // Возвращаем date_created
    const matchesStatus = filterStatus.value.length
        ? filterStatus.value.includes(product.status)
        : true;
    return matchesDate && matchesStatus;
  });
});

const logout = () => authStore.logout();
</script>

<style lang="scss" scoped>
.account-page {
  padding: 2rem;
  .logout-btn {
    margin-bottom: 1rem;
  }
}
</style>