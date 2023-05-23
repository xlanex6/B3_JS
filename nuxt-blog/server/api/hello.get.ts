import { Redis } from '@upstash/redis'
export default defineEventHandler(async (event) => {

  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  })


  // ADD item into `command:aix` set
  // const data = await redis.sadd('command:cham', 'padXXDE');
  // DELETE
  // const data = await redis.srem('command:aix', 'pad004');
  // GET
  const data = await redis.smembers('command:cham');
;

  // const query = getQuery(event)
  // const headers = getHeaders(event)

  return {
    cool: false,
    alex: 'is coding with nuxt',
    allpad: data,
  }
})
