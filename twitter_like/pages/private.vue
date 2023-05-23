<template>
  <UContainer class="py-4 ">
    <div class="flex">

      <div class="w-1/3 border-r-2 border-gray-200 min-h-screen space-y-2 px-2">
        <UserSelector @userSelected="setUser"/>

        <NewTweet :author="user" @forceRefresh="tweetListKey++"/>
      </div>

      <div class="w-2/3 pt-10">

        <TweetList :author="user" :key="tweetListKey"/>
      </div>
    </div>




  </UContainer>
</template>

<script setup>

const user = ref('Alex')

const tweetListKey = ref(0)

async function setUser(userName) {
  user.value = userName
}


definePageMeta({
  middleware: 'protector'
})

</script>
