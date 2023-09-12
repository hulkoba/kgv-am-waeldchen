import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

import Post from 'App/Models/Post'

export default class PostsController {
  // load all
  public async index ({ view }: HttpContextContract) {
    const posts = await Post.query().orderBy('createdAt', 'desc')
    const postsJSON = posts.map(post => post.serialize())
    return view.render('aktuelles', { posts: postsJSON })
  }

  // show add
  public async create ({ view }: HttpContextContract) {
    return view.render('postNew')
  }

  public async store ({ request, response }: HttpContextContract) {
    const image = request.file('post-image', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })!
    const body = request.only(['title', 'text'])

    const post = await Post.create({
      title: body.title,
      text: body.text,
      image: Attachment.fromFile(image),
    })
    post.refresh()

    response.redirect(Route.builder().make('posts.index'))
  }

  public async show ({ view, request }: HttpContextContract) {
    const { id } = request.params()
    const post = (await Post.findOrFail(id)).serialize()
    return view.render('postEdit', { post })
  }

  public async update ({ response, request }) {
    const { id } = request.params()
    const newPost = request.body()
    const post = await Post.findOrFail(id)
    await post?.merge(newPost).save()

    response.redirect(Route.builder().make('companies.index'))
  }

  public async destroy ({ response, request }) {
    console.log('### request.params()', request.params())
    const { id } = request.params()
    const post = await Post.findOrFail(id)
    console.log('### post', post)
    await post?.delete()

    response.redirect(Route.builder().make('posts.index'))
  }
}
