<script>
import Child from './Enfant.vue';
export default {
  components: { Child },
  data() {
    return {
      showFamily: false,
      names: ['alx', 'luca', 'amine', 'amaury' ,'affo']
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
      <Child v-for="name in names">        
        {{ name }}     
      </Child> 
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
    display: flex;
    justify-content: space-evenly;
  }
</style>
