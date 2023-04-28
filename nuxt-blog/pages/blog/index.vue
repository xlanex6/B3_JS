<template>
  <div class="grid min-h-screen place-content-center">

    <Icon v-if="loading" name="svg-spinners:bars-fade" size="40"/>

    <div v-else>

      <div v-for="post in posts" :key="post.id" class="bg-gray-200 rounded-md p-2 m-2">
        <NuxtLink :to="`/blog/${post.id}`">
        
        {{
          post.title }}
        
        </NuxtLink>
      </div>
    </div>
    <!-- 
      loader
      fetch https://jsonplaceholder.typicode.com/posts

      posts avec des card  
      comp BlogPostCard.vue
      props : title, body, id
      @click="goToPost(id)"

     -->
  </div>
</template>

<script setup>
definePageMeta({ layout: 'blog' })

const loading = ref(false)
const posts = ref([])

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  posts.value = await response.json()
}

fetchPosts()

</script>


