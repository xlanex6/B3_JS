<template>

  <div class="flex justify-end px-4 space-x-4 bg-purple-300">
    <p v-show="favoriteCounter > 0">&#9734 {{ favoriteCounter }}</p>
    <h1 class="font-bold text-gray-800 uppercase ">{{ name }}</h1>
  </div>

</template>

<script>
export default {
  props: ['name','favoriteCounter']
}
</script>
