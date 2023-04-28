### Salut les gens

ici je peut ecrire les infos 

[ceici est ul ien ](https://www.google.com)

::navbar
::

## React Server Component

La nouvelle structure "app" de **Next.js 13** est entièrement basé sur les **server components**.
Tous les components sont des **server components** par défaut.

Mais c'est quoi un server components ?

Pour simplifier, ce sont des components générés par le serveur. Ils ne sont pas inclus dans le bundle de l'application envoyé au navigateur. Ils peuvent s'auto-remplacer dans l'arbre des components sans perdre l'état.
[Une explication de la part de Dan Abramov](https://news.ycombinator.com/item?id=25499171)

Si on utilise une majorité de **server component** dans son app, le poids du bundle se réduit considérablement.

Exemple de format d'un server component :

```js
J0:[[["",{"children":["blog",{"children":[["params","948D24C5-725A-2046-19E5-E21F59C6D815","oc"],
{"children":["",{}]}]}]},null,null,true],"@1",[["$","title",null,{"children":"Create Next App"}],
["$","meta",null,{"content":"width=device-width, initial-scale=1","name":"viewport"}], ... enim nisl elementum purus, accumsan interdum libero dui nec ipsum."}]]
```

**Autre avantage des server components, nous pouvons faire des requêtes à l'intérieur des components. Puisque nous sommes cotés serveur \o/.**

```js
async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/getPost?id=${id}`)
  return res.json()
}

export default async function Post({ params }) {
  const [id] = params.params || []
  const post = await getPost(id)
  if (!post) {
    notFound()
  }
  return (
    <>
      <h1 className="my-8 text-3xl font-bold">{post?.title}</h1>
      <p className="text-gray-600">{post?.body}</p>
    </>
  )
}
```
