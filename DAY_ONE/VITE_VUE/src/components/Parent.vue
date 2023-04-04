<script>
import Child from './Enfant.vue';
export default {
  components: { Child },
  data() {
    return {
      showFamily: false,
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
    }
  }
} 
</script>

<template>
  <div id="parent">
    <h1>PARENT</h1>

    <button @click="toogleShowFamily">{{ showFamily ? 'Hide' : 'Show' }} family</button>

    <div v-if="showFamily" id="list">

      <Child v-for="child in childrens" :machin="child"/>        
          
    </div>

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
