import { Redis } from '@upstash/redis/cloudflare'
export default defineNuxtPlugin(nuxtApp => {


  const redisClient = new Redis({
    url: 'https://eu2-enabling-deer-31654.upstash.io',
    token: nuxtApp.$config.public.TOKEN,
  })

  return {
    provide: {
      redis: redisClient
    }
  }
})

