/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const permissions = (await import('../../app/domains/user/permission.js')).permission
    const insertPermissions = []

    for (const key in permissions) {
      insertPermissions.push({
        name: permissions[key],
        created_at: new Date(),
        updated_at: new Date()
      })
    }

    await queryInterface.bulkInsert('permissions', insertPermissions)

    const permissionAssignment = (await import('../../app/domains/user/permission.js'))
      .permissionAssignment

    const permissionRole = []

    for (const role in permissionAssignment) {
      const roleId = await queryInterface.rawSelect('roles', { where: { name: role } }, [
        'id'
      ])

      for (const permission of permissionAssignment[role]) {
        const permissionId = await queryInterface.rawSelect(
          'permissions',
          { where: { name: permission } },
          ['id']
        )

        permissionRole.push({
          role_id: roleId,
          permission_id: permissionId
        })
      }
    }

    await queryInterface.bulkInsert('permission_role', permissionRole)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('permission_role', null, {})
    await queryInterface.bulkDelete('permissions', null, {})
  }
}