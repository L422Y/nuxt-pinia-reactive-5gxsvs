<template>
  <div>
    <h1>Products</h1>
    <div class="products--list">
      <ProductRow v-for="product in products" :product="product" />
    </div>
    <footer>
      <button @click="loadProducts">Load Products</button>
      <button @click="addProduct">Add New Product</button>
    </footer>

    <h3>Product Store Current Value</h3>
    <pre>{{ useProductsStore().products }}</pre>
  </div>
</template>
<script lang="ts" setup>
const productsStore = useProductsStore();

const products = computed(() => useProductsStore().products);

const loadProducts = () => {
  productsStore.loadProducts();
};

const addProduct = () => {
  productsStore.addProduct();
};
</script>
<style>
.products--list {
  display: grid;
  align-content: center;
  gap: 0.5rem;
}
footer {
  margin-top: 1rem;
}
</style>
