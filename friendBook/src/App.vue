<script>
import Navbar from './components/Navbar.vue';
import UserCard from './components/UserCard.vue';

export default {
    data() {
        return {
          name: "",
          showNavBar: false,
          users: [],
          favorite: []
        };
    },
  components: { Navbar, UserCard },
  methods: {
    loadApp() {
      this.showNavBar = true
      this.fetchUsers()
    },
    async fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      this.users = await res.json()
    },
    setUserAsFavorite(userId) {
      const alreadyFavorite = this.favorite.includes(userId)
      if (!alreadyFavorite) {
        this.favorite.push(userId)
      }
    }
      }
  }
</script>

<template>
  <Navbar v-if="showNavBar" :name="name" :favoriteCounter="favorite.length"/>

  <div v-else="!showNavBar" class="grid min-h-screen place-content-center">
    <input type="text" v-model="name" class="text-center uppercase border rounded-md border-neutral-200" placeholder="name" @keyup.enter="loadApp">
    <button @click="loadApp" class="w-full my-3 text-white bg-purple-500 rounded shadow-sm">SAVE</button>
  </div>

  <div class="grid grid-cols-4 gap-4 m-2">

    <UserCard v-for="user in users" :user="user"
      @favoriteUser="setUserAsFavorite"
    />

  </div>
</template>

<style scoped>
</style>
 l
