export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  // analyse du body 
  // si body est valide
  // connoection a la DB
  // insertion dans la DB
  // etc
  return { isPatched: true }
})
