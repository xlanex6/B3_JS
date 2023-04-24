<template>
  <div class="w-48 h-48 bg-gray-100 rounded-md">

<img :src="`https://i.pravatar.cc/100?u=${user.email}`" alt="">
<h3>{{user.name}}</h3>
<h3>{{user.company.name}}</h3>
<p>{{user.phone}}</p>
<p>{{user.email}}</p>

  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>
