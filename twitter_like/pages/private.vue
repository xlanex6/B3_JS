<template>

  <div>

    <h1>PRIVATE</h1>


    <NewTweet/>

    <TweetList/>
    
    
  </div>

</template>

<script setup>

definePageMeta({
  middleware: 'protector'
})

</script>
