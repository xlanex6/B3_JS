<script>
import Navbar from './components/Navbar.vue';

export default {
    data() {
        return {
            name: "",
            showNavBar: false
        };
    },
  components: { Navbar },
  methods: {
    async fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      this.users = await res.json()
      debugger
      }
    }
}
</script>

<template>
  <Navbar v-if="showNavBar" :name="name"/>
  
  <div v-else="!showNavBar" class="grid min-h-screen place-content-center">
    <input type="text" v-model="name" class="text-center uppercase border rounded-md border-neutral-200" placeholder="name">
    <button @click="" class="w-full my-3 text-white bg-purple-500 rounded shadow-sm">SAVE</button>
  </div>
  
</template>

<style scoped>
</style>
