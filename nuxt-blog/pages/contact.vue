<template>
  <div>
    page contact
  </div>
</template>

<script setup >
definePageMeta({
  middleware: ["logger"],
  name: "Contact",
})

useHead({
  title: 'Contact',
  meta: [
    {
      name: 'description',
      content: 'Contact page de mon super blog',
    },
  ],
})
</script>
