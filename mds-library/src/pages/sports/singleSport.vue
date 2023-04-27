<script >
import Header from '../../components/Header.vue';

export default {
  components: { Header },
  data() {
    return {
      resServer: {
        image: "https://picsum.photos/1200/300.jpg",
        baseline: `Venez faire du ${this.$route.params.slug} sur Annecy`,
        title: "index",
        link: "http://www.google.com",
      }
    }
  }
}

</script>

<template>
  <Header :sportData="resServer">
  </Header>
</template>

<style scoped>
</style>


<!-- https://dummyjson.com/products/search?q=phone -->
<!-- TO DO  -->
<!-- 

  LOAD data from server 
  when you arrive on this page 
  display info form server on template page 
 -->
