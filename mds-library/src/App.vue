<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar/>
  <RouterView />
</template>
