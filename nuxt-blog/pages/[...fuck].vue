<template>
  <main class="prose px-4">
    <ContentDoc />
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ["logger"],
  layout: "doc",
})
</script>
