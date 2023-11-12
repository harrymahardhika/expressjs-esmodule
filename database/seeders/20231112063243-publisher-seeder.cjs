const fs = require('fs')
const path = require('path')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const filePath = path.resolve(__dirname, '../../resources/data/publishers.json')
    const publishers = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    const insert = publishers.map((publisher) => ({
      name: publisher.name,
      location: publisher.location,
      created_at: new Date(),
      updated_at: new Date()
    }))

    await queryInterface.bulkInsert('publishers', insert)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('publishers', null, {})
  }
}
