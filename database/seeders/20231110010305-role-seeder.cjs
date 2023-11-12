/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const roles = (await import('../../app/domains/user/permission.js')).role
    const insertRole = []

    for (const key in roles) {
      insertRole.push({
        name: roles[key],
        created_at: new Date(),
        updated_at: new Date()
      })
    }

    await queryInterface.bulkInsert('roles', insertRole)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {})
  }
}
