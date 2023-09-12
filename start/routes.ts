import Route from '@ioc:Adonis/Core/Route'

Route.get('login', 'AuthController.loginShow').as('login.show')
Route.post('login', 'AuthController.login').as('login')
Route.post('logout', 'AuthController.logout').as('logout')

Route.get('/', ({ response }) => {
  response.redirect().toRoute('posts.index')
})

Route.get('/aktuelles', 'PostsController.index').as('posts.index')
Route.get('/post', 'PostsController.create').as('posts.create').middleware('auth')
Route.post('/post', 'PostsController.store').as('posts.store').middleware('auth')
Route.get('/post/:id', 'PostsController.show').as('posts.show').middleware('auth')
Route.put('/post/:id', 'PostsController.update').as('posts.update').middleware('auth')
Route.get('/post/delete/:id', 'PostsController.destroy').as('posts.destroy').middleware('auth')

Route.get('/verein', async ({ view }) => {
  return view.render('verein')
})

Route.get('/faq', async ({ view }) => {
  return view.render('faq')
})

Route.get('/anbau', 'HelpersController.calcGarden')
Route.post('/anbau', 'HelpersController.calcGarden')

Route.get('/rechtliches', async ({ view }) => {
  return view.render('rechtliches')
})

Route.get('/dokumente', async ({ view }) => {
  return view.render('dokumente')
})

Route.get('/impressum', async ({ view }) => {
  return view.render('impressum')
})

Route.get('/datenschutz', async ({ view }) => {
  return view.render('datenschutz')
})

