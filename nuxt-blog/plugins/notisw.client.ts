

export default defineNuxtPlugin( async (nuxtApp) => {

  // now available on`nuxtApp.$regNotiSw`
  // nuxtApp.provide('regNotiSw', async () => {

  //   if ('serviceWorker' in navigator) {
  //     let url = process.env.PUBLIC_URL + '/notisw.js';
  //     const reg = await navigator.serviceWorker.register(url, { scope: '/' });
  //     console.log('service config is', { reg });
  //     return reg;
  //   }
  //   throw Error('serviceworker not supported');
  // })


  // nuxtApp.provide('subscribe', async (serviceWorkerReg) => {
  //     let subscription = await serviceWorkerReg.pushManager.getSubscription();
  //     console.log({ subscription });
  //     if (subscription === null) {
  //       subscription = await serviceWorkerReg.pushManager.subscribe({
  //         userVisibleOnly: true,
  //         applicationServerKey: process.env.PUBLIC_VAPID_KEY,
  //       });
  //       // send `subscription` to server to store sub inot DB for later use
  //     }
  // })



  //     const workbox = await window.$workbox
  // if(!workbox) {
  //     console.log("Workbox couldn't be loaded.")
  //     return
  //   }
  // workbox.addEventListener('installed', (event) => {
  //     if (!event.isUpdate) {
  //       console.log('The PWA is on the latest version.')
  //       return
  //     }
  //     console.log('There is an update for the PWA, reloading...')
  //     window.location.reload()
  //   })


})
