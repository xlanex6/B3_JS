<template>
  <div>
    single post page :{{ $route.params.postId }}

    {{ post.title  }}
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


