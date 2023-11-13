/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const roles = (await import('../../app/domains/user/permission.js')).role
    const insertRole = []

    Object.keys(roles).forEach((key) => {
      insertRole.push({
        name: roles[key],
        created_at: new Date(),
        updated_at: new Date()
      })
    })

    await queryInterface.bulkInsert('roles', insertRole)
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('roles', null, {})
  }
}
