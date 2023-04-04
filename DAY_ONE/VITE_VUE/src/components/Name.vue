<script>
export default {
  data() {
    return {
      name: 'ALEX'
    }
  },
  methods: {
    changeName() {
      this.name === 'Luca' ? this.name = 'Alex' : this.name = 'Luca'
    }
  }
}

</script>


<template>
  <button @click="changeName">{{ name }} le prof de VUE js </button>
</template>

<style scoped>
button {
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
</style>


