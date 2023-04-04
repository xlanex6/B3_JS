<!-- <script>
export default {
  data() {
    return {
    }
  }
}
</script> -->

<template>
  <div class="child">
  <!-- tu comble le vide par le text entre les balises   avec <slot/>    -->
    <slot/>
  </div>
</template>
<style>
.child {
  color: burlywood;
  background-color: grey;
  width: 70px;
  height: 70px;
  margin: 2px;
}
</style>
