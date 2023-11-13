/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('permission_role', {
      permission_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'permissions' },
          key: 'id'
        }
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'roles' },
          key: 'id'
        }
      }
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('permission_role')
  }
}
