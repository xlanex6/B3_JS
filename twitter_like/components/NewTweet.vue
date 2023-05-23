<template>
<div class="px-2 space-y-2">
  <!-- <USelectMenu v-model="userSelected" :options="people"  size="sm"/> -->
  <UserSelector @userSelected="setUser"/>
  <UTextarea size="md" v-model="newTweetInput" />
  <div class="flex justify-end">
    <UButton color="primary" variant="solid" @click="saveNewTweet" class="">Tweet</UButton>  
  </div>
</div>

</template>

<script setup >

// const people = ['Alex','Anmine','Affo','Alexandre']

const newTweetInput = ref('')
// const userSelected = ref(people[0])

const user = ref('')
async function setUser(e) {
  user.value = e
}

const nuxtApp = useNuxtApp()
const { $redis } = nuxtApp

async function saveNewTweet() {
  // user001 = [Set]
  const res = await $redis.sadd(user.value, newTweetInput.value);
  console.log(res)
}
</script>

