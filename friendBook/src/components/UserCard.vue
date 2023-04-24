<template>
  <div class="relative h-48 bg-gray-100 rounded-md shadow-lg w-36 hover:cursor-pointer"
  @click="setAsFavorite"
  >

  <div class="absolute z-10 grid w-6 h-6 text-white bg-purple-500 rounded-full place-content-center -right-2 top-4">&#9734</div>

<img :src="`https://i.pravatar.cc/100?u=${user.email}`" alt="" class="h-36 w-36 ">
<h3 class="text-sm text-center">{{user.name}}</h3>
<h3 class="text-xs text-center">{{user.company.name}}</h3>

  </div>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    setAsFavorite() {
      this.$emit('favoriteUser', this.user.id)
    }
  }
}
</script>
