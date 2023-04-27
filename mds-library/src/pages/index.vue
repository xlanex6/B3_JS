<script >
import Header from '../components/Header.vue';

export default {
  components: { Header },
  data() {
    return {
      resServer: {
        image: "https://picsum.photos/1000/300.jpg", baseline: "Viens c'est cool", title: "index",
        link: "http://www.google.com",
      }
    }
  }
}

</script>

<template>
  <Header :sportData="resServer">

    
      <!-- <template #title>
 {{ resServer.title }} 🛶 
    </template>
  
    <template #cta>
      Réserver avec ALEX 🗓️
    </template>  -->
 
    
  </Header>
</template>

<style scoped>
</style>
