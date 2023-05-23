<template>
  <UContainer class="py-4 ">
    <div class="flex">

      <div class="w-1/3 border-r-2 border-gray-200 min-h-screen">
        <NewTweet />
      </div>

      <div class="w-2/3">
        <TweetList />
      </div>
    </div>




  </UContainer>
</template>

<script setup>

definePageMeta({
  middleware: 'protector'
})

</script>
