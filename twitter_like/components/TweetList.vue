<template>
  <UContainer>
    <!-- <UserSelector @userSelected="setUser"/> -->

    <div class="space-y-2 mt-4">
      {{ author }}
      <div class="bg-gray-100 rounded-lg p-2" v-for="tweet in userTweetsList">{{ tweet }}</div>
    </div>
    
  </UContainer>

</template>

<script setup>
const nuxtApp = useNuxtApp()
const { $redis } = nuxtApp

const userTweetsList = ref([])

const props = defineProps({
  author: {
    type: String,
    required: true
  }
})

async function getUserTweet(user) {
  const res = await $redis.smembers(user)
  userTweetsList.value = res
}

getUserTweet(props.author)


watch(props, () => {
  getUserTweet(props.author)
})



</script>
