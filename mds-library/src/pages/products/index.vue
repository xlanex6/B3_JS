<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">All product</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


        <h1 class="text-6xl" v-if="loading"> LOADING .....</h1>

        <ProductCard v-else v-for="product in products" :product="product" :key="product.id" />
         
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../../components/ProductCard.vue'
export default {
  components: { ProductCard },
  data() {
    return {
      products: [],
      loading: false
    }
  },
  async created() {
    // console.log('created')

    // const productsData = await fetch('https://dummyjson.com/products')
    // const { products } = await productsData.json()
    // this.products = products
  },
  async mounted() {
    this.loading = true

    const productsData = await fetch('https://dummyjson.com/products')
    const {products} = await productsData.json()
    this.products = products
    this.loading = false
  }
}
</script>
<!-- https://dummyjson.com/products/search?q=car -->
