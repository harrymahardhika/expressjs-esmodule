const { faker } = require('@faker-js/faker')
const bcrypt = require('bcrypt')
require('dotenv').config()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const roles = await queryInterface.sequelize.query('SELECT * FROM roles', {
      type: queryInterface.sequelize.QueryTypes.SELECT
    })

    const insertUsers = []

    for (let index = 0; index < 10; index++) {
      insertUsers.push({
        name: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        password: bcrypt.hashSync('password', parseInt(process.env.BCRYPT_ROUNDS, 10)),
        role_id: roles[Math.floor(Math.random() * roles.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      })
    }

    await queryInterface.bulkInsert('users', insertUsers)
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
