import { test } from '@japa/runner'

test('display faq page', async ({ client }) => {
  const response = await client.get('/antraege')

  response.assertStatus(200)
  response.assertTextIncludes('<h1 class="title">Anträge</h1>')
})
