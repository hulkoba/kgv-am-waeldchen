import Factory from '@ioc:Adonis/Lucid/Factory'

import User from '../../app/Models/User'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    name: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
  }
}).build()
