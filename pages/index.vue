<template>
    <div>
        <h1>Products</h1>
        <div class="products--list">
            <ProductRow v-for="product in products" :product="product"/>
        </div>
        <footer>
            <button @click="productsStore.initialize">Initialize Store</button>
            <button @click="addProduct">Add New Product</button>
        </footer>

        <h3>Product Store Current Value</h3>
        <pre>{{ useProductsStore().products }}</pre>

        <h3>
            Product One
            <pre>{{ prductOne ? prductOne : 'Not Loaded' }}</pre>
        </h3>
    </div>
</template>
<script lang="ts" setup>
const productsStore = useProductsStore()

const products = computed(() => Array.from(useProductsStore().products.values()))

const prductOne = computed(() => useProductsStore().products.get("product-1"))

const addProduct = () => {
    const productNumber = useProductsStore().products.size + 1
    productsStore.addProduct({
        id: `product-${productNumber}`,
        name: `Product ${productNumber}`,
        price: 100,
    })
}
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
