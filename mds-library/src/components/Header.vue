<template>
  <header class="flex items-center justify-center flex-col text-white">
    <h1 class="font-bold text-5xl uppercase ">
      <slot name="title">{{ sportData.title }}</slot>
    </h1>
    <p>{{ sportData.baseline }}</p>

    <a :href="sportData.link" class="bg-green-500 px-4 py-2 rounded-md mt-2">
      <slot name="cta">
        Réserver
      </slot>
      </a>
    
  </header>
</template>

<script>
export default {
  props: {
    // title: {
    //   type: String,
    //   required: true,
    // },
    // baseline: {
    //   type: String,
    //   required: true,
    // },
    // link: {
    //   type: String,
    //   required: true,
    // },
    // image: {
    //   type: String,
    //   required: true,
    // }
    sportData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
  buildUrl() {
    return `url(${this.sportData.image})`
  }
  }
}
</script>

<style scoped>
header {
  height: 300px;
  background-image:radial-gradient(circle, rgba(63,94,251,0.6681818181818182) 0%, rgba(252,70,107,0.375) 100%), v-bind(buildUrl);
}
</style>
