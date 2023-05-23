<template>
<div>
  <input type="text" v-model="newTweetInput">
  <button @click="saveNewTweet"> SAVE</button>
</div>

</template>

<script setup >

const newTweetInput = ref('')

const nuxtApp = useNuxtApp()
const { $redis } = nuxtApp

async function saveNewTweet() {
  // user001 = [Set]
  const res = await $redis.sadd('user001', newTweetInput.value);
  console.log(res)
}
</script>
