<script >
import ProductHeader from '../../components/ProductHeader.vue';

export default {
  components: { ProductHeader },
  data() {
    return {
      product:{}
    }
  },
    async created() {
    const response = await fetch(`https://dummyjson.com/products/${this.$route.params.productId}`)
    this.product = await response.json()
  }
}

</script>

<template>
  <ProductHeader :product="product"/>
  <div class="max-w-xl flex flex-col items-center px-4">

    <div class="flex"><img v-for="(image,index) in product.images" :src="product.images[index]" width="200" height="auto" alt="" loading="lazy"></div>
  </div>
</template>

<style scoped>
</style>
