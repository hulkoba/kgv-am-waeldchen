import { BaseCommand } from '@adonisjs/core/build/standalone'

import crypto from 'crypto'

export default class CreateUser extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'create:user'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Create a new use'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run () {
    const { default: User } = await import('../app/Models/User')
    const name = await this.prompt.ask('Enter name')

    // password will be changed by the user at the registration
    const password = crypto.randomBytes(16).toString('hex')
    const data = { name, password }
    try {
      await User.create(data)
      this.logger.success(`User created successfully with name ${data.name}`)
    } catch (error) {
      this.logger.error(error)
    }
  }
}
