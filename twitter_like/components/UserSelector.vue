<template>
    <select name="users" id="user-selection" class="border border-gray-300 rounded-lg"  :value="userSelected" @input="$emit('userSelected', $event.target.value)">
      <option v-for="user in people" :value="user">{{user}}</option>
  </select>
</template>
<script setup>
const people = ['Alex', 'Anmine', 'Affo', 'Alexandre']
const userSelected = ref('Alex')



</script>
