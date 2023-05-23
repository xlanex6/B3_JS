import webpush from 'web-push'

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  
  webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

  return {
    body
  }
})
