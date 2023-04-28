<template>
  <div>
    Home
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["logger"],
  title: "Accueil",
})

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'home page de mon super blog',
    },
  ],
})
</script>
