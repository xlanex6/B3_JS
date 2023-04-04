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
  display: grid;
  place-content: center;
  background-color: grey;
  width: 70px;
  height: 70px;
  margin: 2px;
  border-radius: 5px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

h3 {
  color: grey;
}
</style>
