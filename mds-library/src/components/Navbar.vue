<template>
<div class="flex justify-center space-x-6 bg-gray-300 h-12 items-center">

  <router-link :to="item.link" v-for="item in menu" :key="item.name"
  >{{ item.name }}</router-link>
  
</div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        { name: 'Index', link: '/'},
        { name: 'Boxe', link: '/boxe'},
        { name: 'Kayak', link: '/kayak'},
        { name: 'Machin', link: '/machin'},
      ]
    }
  }
}
</script>


