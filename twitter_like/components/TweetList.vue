<template>

<pre>
  {{ tweetsList }}
</pre>

</template>

<script setup>
const nuxtApp = useNuxtApp()
const { $redis } = nuxtApp

//  GET REDIS --- READ 
const tweetsList = await $redis.smembers('user001');



</script>
