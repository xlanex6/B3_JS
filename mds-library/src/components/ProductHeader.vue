<template>
  <header class="flex items-center justify-center flex-col text-white">
    <h1 class="font-bold text-5xl uppercase ">
      <slot name="title">{{ product.title }}</slot>
    </h1>
    <p>{{ product.description }}</p>

    <a :href="`https://www.amazon.fr/s?k=${product.title}&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=21E763RYC3H9P&sprefix=${product.title}%2Caps%2C101&ref=nb_sb_noss_2`" class="bg-green-500 px-4 py-2 rounded-md mt-2">
      <slot name="cta">
        Acheter sur amazon
      </slot>
      </a>
    
  </header>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
header {
  height: 300px;
  background-image:radial-gradient(circle, rgba(63,94,251,0.6681818181818182) 0%, rgba(252,70,107,0.375) 100%);
}
</style>
