<script>
export default {
  props: ['machin','index'],
  methods: {
    setFavoriteChild() {
      this.$emit('favoriteChild', this.machin.name )
    },
    kill(index) {
      this.$emit('kill', index )
    }
  }
}

</script>

<template>
  <div class="child" >
  <!-- tu comble le vide par le text entre les balises   avec <slot/>    -->
    {{ machin.name }}


    <!-- si age > 30 => .old , sinon .young -->
    <div class="age" @click="setFavoriteChild" :class="machin.age >= 24 ? 'old': 'young'">{{ machin.age }}</div>

    <div @click="kill(index)">💀</div>

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

.child:hover {
  cursor: pointer;
}

.age {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  color: white;
}
.young {
  background-color:red;
}
.old {
  background-color: orange;
}

h3 {
  color: grey;
}
</style>
