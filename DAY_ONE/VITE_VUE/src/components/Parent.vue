<script>
import Child from './Enfant.vue';
export default {
  components: { Child },
  data() {
    return {
      names: ['alx', 'luca', 'amine', 'amaury' ,'affo']
    }
  }
} 
</script>

<template>
  <div id="parent">
    <h1>PARENT</h1>

    <div id="list">
      <Child v-for="name in names"> 
        
        {{ name }}
      
      </Child> 
    </div>

  </div>
</template>

<style scoped>
  #parent {
    border: 1px dashed lightgray;
    width: 500px;
    height: 300px;
    margin: auto;
  }
  #list {
    display: flex;
    justify-content: space-between;
  }
</style>
