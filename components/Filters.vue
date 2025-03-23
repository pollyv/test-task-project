<template>
  <div class="filters">
    <input v-model="date" type="text" placeholder="Фильтр по дате" />
    <div class="checkbox-group">
      <label>
        <input type="checkbox" value="available" v-model="status" />
        В наличии
      </label>
      <label>
        <input type="checkbox" value="out_of_stock" v-model="status" />
        Нет в наличии
      </label>
    </div>
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
  align-items: center;

  input[type="text"] {
    height: 30px;
    padding: 0 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .checkbox-group {
    display: flex;
    gap: 1rem;

    label {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 1rem;

      input[type="checkbox"] {
        margin-right: 0.5rem;
        cursor: pointer;
      }

      &:hover {
        color: #007bff;
      }
    }
  }
}
</style>