export default defineNuxtRouteMiddleware((to, from) => {

  const passwordCookie = useCookie('password')

  if (passwordCookie.value !== '123soleil') {
    return navigateTo('/')
   }
})
