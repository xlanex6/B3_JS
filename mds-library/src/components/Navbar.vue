<template>
  <div class="flex justify-center space-x-6 bg-gray-300 h-12 items-center">

    <router-link :to="path" :key="path" v-for="{ path, displayName } in navbarLinkOnly">{{ displayName }}</router-link>

  </div>
</template>
<script>
import { routes } from '../routes'

export default {
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


