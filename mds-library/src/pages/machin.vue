<template>
<Header :sportData="resServer"/>
</template>
<script>
import Header from '../components/Header.vue';

export default {
  components: { Header },
  data() {
    return {
      resServer: {
        image: "https://picsum.photos/1000/300.jpg",
        baseline: "Venez faire du MACHIN sur Annecy",
        title: "MACHIN",
        link: "http://www.double-slash.dev",
      }
    }
  }
}
</script>
