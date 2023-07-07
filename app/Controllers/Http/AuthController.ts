import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

export default class AuthController {
  public async loginShow ({ view }: HttpContextContract) {
    return view.render('login')
  }

  public async login ({ request, response, auth, session }: HttpContextContract) {
    const { name, password } = request.only(['name', 'password'])
    try {
      await auth.attempt(name, password)
    } catch (error) {
      session.flash('loginError', 'Das hat nicht geklappt :(')
      return response.redirect(Route.makeUrl('login.show'))
    }
    return response.redirect(Route.makeUrl('home'))
  }

  public async logout ({ auth, response, session }: HttpContextContract) {
    await auth.logout()
    session.flash('logoutInfo', 'Du bist abgemeldet')
    return response.redirect(Route.makeUrl('home'))
  }
}
