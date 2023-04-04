<script>
import Child from './Enfant.vue';
export default {
  components: { Child },
  data() {
    return {
      showFamily: false,
      favorite: null,
      childrens: [
        {name: 'alex',age: 38},
        {name: 'luca',age: 23},
        {name: 'affo',age: 24},
        {name: 'amaury',age: 20},
        {name: 'amine',age: 23},
      ]
    }
  },
  methods: {
    toogleShowFamily() {
      this.showFamily = !this.showFamily
    },
    setChildAsFavorite(favoriteChildName) {
      this.favorite = favoriteChildName
    },
    killChild(index) {
      // si index child === favorite => favorite => null
      const {name} = this.childrens[index]
      if (name === this.favorite) {
        this.favorite = null
      }
      this.childrens.splice(index,1)
    }
  }
} 
</script>

<template>
  <div id="parent">
    <h1>PARENT</h1>

    <button @click="toogleShowFamily">{{ showFamily ? 'Hide' : 'Show' }} family</button>

    <div v-show="showFamily" id="list">

      <Child v-for="(child, index) in childrens" 
      :machin="child"
      :index="index"
      v-on:favoriteChild="setChildAsFavorite"
      @kill="killChild"
      />      
      
      
    </div>
    <h3>Favorite : {{ favorite }}</h3>
  </div>
</template>

<style scoped>
  #parent {
    border: 2px dashed lightgray;
    width: 500px;
    height: 300px;
    margin: auto;
  }
  #list {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
  }
</style>
