<template>
  <div class="bg-green-200 grid min-h-screen place-content-center">
    <div class="text-center text-gray-400">
    <Icon name="material-symbols:lock" size="60"/>
    <UInput  appearance="white" size="xl" placeholder="Password" type="password" @keyup.enter="setCookie(passwordInput)" v-model="passwordInput" name="password" />
  </div>

  </div>

</template>

<script setup>
const passwordInput = ref('') 
const routes = useRouter()

// https://nuxt.com/docs/api/composables/use-cookie#usecookie
const passwordCookie = useCookie('password')

function setCookie(cookie) {
  passwordCookie.value = cookie
  navigateTo('/private')
}

onMounted(() => {
  const pass = routes.query?.password
  if (pass === '123soleil') {
    setCookie(pass)
    navigateTo('/private')
  }
})


</script>
