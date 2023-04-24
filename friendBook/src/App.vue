<script>
import Navbar from './components/Navbar.vue';
import UserCard from './components/UserCard.vue';
import SearchBar from './components/SearchBar.vue';
import Btn from './components/Btn.vue';

export default {
    data() {
        return {
          name: "",
          age: null,
          showNavBar: false,
          users: [],
          favorite: [],
          searchQuery: ''
        };
  },
  components: { Navbar, UserCard, SearchBar, Btn },
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
      // user Id est deja favoris
      if (alreadyFavorite) {
        this.favorite = this.favorite.filter((id) => id !== userId)
        return
      }
      //  MAJEUR FAV COUNTER == 5 SINON 3 
      if (this.favorite.length < this.favoriteLimit && !alreadyFavorite) {
        this.favorite.push(userId)
      }
      //  si favorite plus de 3
      else {
        this.favorite.shift()
        this.favorite.push(userId)
      }
    }
  },
  computed: {
    favoriteLimit() {
      return this.age >= 18 ? 5 : 2
    },
    filteredUsers() {
      // return this.users.filter((user) => 
      //    user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      // )
      if (!this.searchQuery) {
        return this.users
      } else {
        // moteur de recheche du pauvre
        return this.users.filter((user) => 
           user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }
    }
  }
  }
</script>

<template>
  <Navbar v-if="showNavBar" :name="name" :favoriteCounter="favorite.length"/>

  <div v-else="!showNavBar" class="grid min-h-screen gap-2 place-content-center">
    <input type="text" v-model.number="age" class="text-center uppercase border rounded-md border-neutral-200" placeholder="age">
    <input type="text" v-model="name" class="text-center uppercase border rounded-md border-neutral-200" placeholder="name" @keyup.enter="loadApp">

    <button @click="loadApp" class="w-full my-3 text-white bg-purple-500 rounded shadow-sm">SAVE</button>
  </div>

  <div class="flex items-center">

    <SearchBar 
    :modelValue="searchQuery"
    @update:modelValue="newValue => searchQuery = newValue"
    />
    <Btn size="XL" :success="true" warning
    
    
    >  
     Action
    </Btn>
  </div>

  <div class="grid grid-cols-4 gap-4 m-2">
    <UserCard v-for="user in filteredUsers" 
      :user="user"
      :isFavorite="favorite.includes(user.id)"
      @favoriteUser="setUserAsFavorite"
    />
  </div>
</template>

<style scoped>
</style>
