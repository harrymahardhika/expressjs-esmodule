const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const insert = []
    for (let i = 0; i < 20; i++) {
      insert.push({
        name: faker.person.fullName(),
        created_at: new Date(),
        updated_at: new Date()
      })
    }

    await queryInterface.bulkInsert('authors', insert)
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('authors', null, {})
  }
}
