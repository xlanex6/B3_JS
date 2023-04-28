<template>
  <div class="max-w-screen-lg m-auto px-2">
    <h1 class="text-center text-3xl">
      {{ post.title  }}
    </h1>
    <p>{{ post.body }}</p>

  </div>
</template>

<script setup>
definePageMeta({ layout: 'blog' })

const { params }  = useRoute()
const post = ref({})

async function fetchSinglePost(postId) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
  post.value = await response.json()
}

fetchSinglePost(params.postId)
</script>


