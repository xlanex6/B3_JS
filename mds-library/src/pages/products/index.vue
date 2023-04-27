<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">All product</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

  <svg v-if="loading" class="h-12 w-12 text-center" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor" d="M1 4h6v14H1z">
      <animate id="b" fill="freeze" attributeName="opacity" begin="0;a.end-0.25s" dur="0.75s" values="1;.2"/>
    </path>
    <path fill="currentColor" opacity=".4" d="M9 4h6v14H9z">
      <animate fill="freeze" attributeName="opacity" begin="b.begin+0.15s" dur="0.75s" values="1;.2"/>
    </path>
    <path fill="currentColor" opacity=".3" d="M17 4h6v14h-6z">
      <animate id="a" fill="freeze" attributeName="opacity" begin="b.begin+0.3s" dur="0.75s" values="1;.2"/>
    </path>
  </svg>


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
  methods: {
    async fetchProducts() {
      const productsData = await fetch('https://dummyjson.com/products')
      const { products } = await productsData.json()
      this.products = products
      this.loading = false
    }
  },
  mounted() {
      this.loading = true

    setTimeout(() => {
      this.fetchProducts()
    }, 1000);

  }
}
</script>
<!-- https://dummyjson.com/products/search?q=car -->
