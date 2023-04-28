<template>
  <div>
    Home
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["logger"],
  title: "Accueil",
})

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'home page de mon super blog',
    },
  ],
})

// methods 
function XX() {

}

// computed
const YY = computed(() => {
  return  isMajor.value == this.isMajor
        //   COMP API      options API
})

// data()
const newData = reactive({
  name: 'John',
  age: 42,
})
const isMajor = ref(false)
const myArray = ref([])

console.log(myArray.value) // []
console.log(newData.name) // John

</script>
