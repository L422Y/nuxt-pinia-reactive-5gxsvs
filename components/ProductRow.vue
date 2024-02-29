<template>
  <div class="product-row">
    <div>{{ product.id }}</div>
    <div><input v-model="product.name" /></div>
    <div>
      <select v-model.lazy="product.type">
        <option value="clothing">Clothing</option>
        <option value="lactose">Lactose</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{ product: any }>();
</script>
<style>
.product-row {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>
