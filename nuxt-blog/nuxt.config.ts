// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content', '@kevinmarrec/nuxt-pwa'],
  pwa: {
    meta: {
      mobileAppIOS: true,
    },
    manifest: {
      lang: "fr",
      name: 'MDS',
      short_name: 'MDS',
      display: 'standalone',
      orientation: 'any',
      scope: "./",
      description: "L'application MDS",
      start_url: './?utm_source=pwa',
      theme_color: '#6b21a8',
      background_color: '#6b21a8',
      // appleStatusBarStyle: 'black-translucent'
    },
    workbox: {
      enabled:true,
      importScripts: [
        'notisw.js'
      ],
    },
  }
})
