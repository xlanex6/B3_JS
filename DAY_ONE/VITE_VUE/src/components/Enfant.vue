<script>
export default {
  props: ['machin']
}
</script>

<template>
  <div class="child">
  <!-- tu comble le vide par le text entre les balises   avec <slot/>    -->
    {{ machin.name }}

    <div class="age">{{ machin.age }}</div>

  </div>
</template>
<style>
.child {
  color: burlywood;
  position: relative;
  display: grid;
  place-content: center;
  background-color: grey;
  width: 70px;
  height: 70px;
  margin: 2px;
  border-radius: 5px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.age {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 0;
  height: 25px;
  width: 25px;
  background-color:red;
  border-radius: 50%;
  color: white;
}

h3 {
  color: grey;
}
</style>
