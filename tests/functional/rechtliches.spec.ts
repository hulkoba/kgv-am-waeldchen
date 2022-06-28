import { test } from '@japa/runner'

test('display faq page', async ({ client }) => {
  const response = await client.get('/rechtliches')

  response.assertStatus(200)
  response.assertTextIncludes('<h1 class="title is-1">Rechtliches</h1>')
})
