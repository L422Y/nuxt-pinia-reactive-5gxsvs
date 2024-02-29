export const useProductsStore = defineStore("products", () => {
    const productsMap = reactive(new Map<string, any>())

    function initialize() {
        setTimeout(() => {
            productsMap.set("product-1", {
                id: 1,
                name: "product one",
                type: "Clothing",
            })
            productsMap.set("product-2", {
                id: 2,
                name: "product two",
                type: "Shoes",
            })
        }, 5000)
    }

    function addProduct({id, name, type}: {id: string, name: string, type: string}) {
        productsMap.set(name, {
            id,
            name,
            type
        })
    }

    return {
        initialize,
        products: productsMap,
        addProduct
    }
})
