<template>
<div class="space-y-2">
  <UTextarea size="md" v-model="newTweetInput" />
  <div class="flex justify-end">
    <p v-show="error" class="text-red-500 "> ERROR</p>
    <UButton color="primary" variant="solid" @click="saveNewTweet" class="">Tweet</UButton>  
  </div>
</div>

</template>

<script setup >
const props = defineProps({
  author: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['forceRefresh'])

const newTweetInput = ref('')
const error = ref(false)

const nuxtApp = useNuxtApp()
const { $redis } = nuxtApp

async function saveNewTweet() {
  // user001 = [Set]
  const res = await $redis.sadd(props.author, newTweetInput.value);
  // console.log(res) 
  if (res === 1) {
    newTweetInput.value = ''
    error.value = false
    emit('forceRefresh')
  } else {
    error.value = true
  }
}
</script>

