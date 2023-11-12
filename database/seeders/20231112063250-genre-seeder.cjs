const fs = require('fs')
const path = require('path')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const filePath = path.resolve(__dirname, '../../resources/data/genres.json')
    const genres = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    const insert = genres.map((genre) => ({
      name: genre.name,
      description: genre.description,
      created_at: new Date(),
      updated_at: new Date()
    }))

    await queryInterface.bulkInsert('genres', insert)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genres', null, {})
  }
}
