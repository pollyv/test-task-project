<template>
  <div class="filters">
    <input v-model="date" type="text" placeholder="Фильтр по дате" />
    <select v-model="status" multiple>
      <option value="available">В наличии</option>
      <option value="out_of_stock">Нет в наличии</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const date = defineModel<string>('date', { default: '' });
const status = defineModel<string[]>('status', { default: [] });
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  select {
    height: 100px;
  }
}
</style>