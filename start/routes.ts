import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('home')
})

Route.get('/aktuelles', async ({ view }) => {
  return view.render('aktuelles')
})

Route.get('/kontakt', async ({ view }) => {
  return view.render('kontakt')
})

Route.get('/faq', async ({ view }) => {
  return view.render('faq')
})

Route.get('/anbau', 'HelpersController.calcGarden')
Route.post('/anbau', 'HelpersController.calcGarden')

Route.get('/rechtliches', async ({ view }) => {
  return view.render('rechtliches')
})

Route.get('/antraege', async ({ view }) => {
  return view.render('antraege')
})

Route.get('/impressum', async ({ view }) => {
  return view.render('impressum')
})

Route.get('/datenschutz', async ({ view }) => {
  return view.render('datenschutz')
})
