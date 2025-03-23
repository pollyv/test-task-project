<template>
  <table class="product-table">
    <thead>
    <tr>
      <th>№</th>
      <th>Название</th>
      <th>Статус</th>
      <th>Дата поступления</th>
      <th>Цена (₽)</th>
      <th>Тип</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="product in products" :key="product.id">
      <td>{{ product.id }}</td>
      <td>{{ product.name }}</td>
      <td>{{ product.status === 'available' ? 'В наличии' : 'Нет в наличии' }}</td>
      <td>{{ product.date_created }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.type === 'beans' ? 'Зёрна' : product.type === 'ground' ? 'Молотый' : 'Дрип' }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product';

defineProps<{
  products: Product[];
}>();
</script>

<style lang="scss" scoped>
.product-table {
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
}
</style>