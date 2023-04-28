<template>
  <div class="bg-deg">
    Home
    <Icon name="material-symbols:remove-shopping-cart-outline-rounded" size="40"/>

    <pre>{{ alex }}</pre>
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

const alex = ref(null)

console.log(myArray.value) // []
console.log(newData.name) // John

async function fetchServer() {
  const res = await fetch('/api/hello')
  alex.value = await res.json()
}

fetchServer()

</script>
