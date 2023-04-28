<template>
  <div class="flex items-center justify-center h-12 space-x-6 bg-gray-300">

    <router-link :to="path" :key="path" v-for="{ path, displayName } in navbarLinkOnly">{{ displayName }}</router-link>

  </div>
</template>
<script>
import { routes } from '../routes'

export default{
  data() {
    return {
      routes
    }
  },
  computed: {
    navbarLinkOnly() {
      return this.routes.filter((route) => route.navbarVisible)
    }
  }
}
</script>


