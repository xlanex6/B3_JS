<script >
import Header from '../components/Header.vue';

export default {
  components: { Header },
  data() {
    return {
      resServer: {
        image: "https://picsum.photos/1000/300.jpg", baseline: "Venez faire de la BOXER sur Annecy", title: "BOXE",
        link: "http://www.google.com",
      }
    }
  }
}

</script>

<template>
  <Header :sportData="resServer">
      <template #cta>
        Réserver avec ALEX 🗓️
      </template>  
  </Header>
</template>

<style scoped>
</style>
