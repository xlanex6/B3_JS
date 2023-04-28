import { Redis } from '@upstash/redis'
export default defineEventHandler(async (event) => {


  const redis = new Redis({
    url: 'https://eu2-enabling-deer-31654.upstash.io',
    token: 'myToken',
  })

  const data = await redis.get('foo');

  const query = getQuery(event)
  const headers = getHeaders(event)

  return {
    cool: false,
    alex: 'is coding with nuxt',
    query,
    data,
    headers
  }
})
