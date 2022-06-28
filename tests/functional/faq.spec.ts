import { test } from '@japa/runner'

test('display faq page', async ({ client }) => {
  const response = await client.get('/faq')

  response.assertStatus(200)
  response.assertTextIncludes('<h1 class="title">Häufig gestellte Fragen und Antworten</h1>')
})
