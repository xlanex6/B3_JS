<template>
  <UContainer>
    <UserSelector @userSelected="setUser"/>

    <div class="space-y-2 mt-4">
      <div class="bg-gray-100 rounded-lg p-2" v-for="tweet in usersTweetsList">{{ tweet }}</div>
    </div>
    
  </UContainer>

</template>

<script setup>
const nuxtApp = useNuxtApp()
const { $redis } = nuxtApp

const user = ref('')
const usersTweetsList = ref([])

async function setUser(e) {
  user.value = e
}

async function getUserTweet(user) {
  const res = await $redis.smembers(user)
  usersTweetsList.value = res
}

watch(user, () => {
  getUserTweet(user.value)
})


</script>
