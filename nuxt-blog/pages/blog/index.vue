<template>
  <div class="grid min-h-screen place-content-center">

    <Icon v-if="loading" name="svg-spinners:bars-fade" size="40"/>

    <div v-else>

      <div v-for="post in posts" :key="post.id" class="bg-gray-200 rounded-md p-2 m-2">
        <NuxtLink :to="`/blog/${post.id}`" class="">

          <img :src="`https://loremflickr.com/200/70?random=${post.id}`" alt="" class="rounded m-auto">
        <h3 class="first-letter:uppercase">
          {{ post.title }}
          <Icon name="cil:external-link" size="10" class="ml-1 opacity-40"/>
        </h3>

        
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'blog' })

const loading = ref(true)
const posts = ref([])

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  posts.value = await response.json()
  loading.value = false
}

onMounted(() => {
  setTimeout(() => {
    fetchPosts()
  }, 1000)
})

</script>


