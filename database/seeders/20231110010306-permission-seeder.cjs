/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const permissions = (await import('../../app/domains/user/permission.js')).permission
    const insertPermissions = []

    Object.keys(permissions).forEach((key) => {
      insertPermissions.push({
        name: permissions[key],
        created_at: new Date(),
        updated_at: new Date()
      })
    })

    await queryInterface.bulkInsert('permissions', insertPermissions)

    const { permissionAssignment } = await import('../../app/domains/user/permission.js')

    Object.keys(permissionAssignment).forEach(async (role) => {
      const roleId = await queryInterface.rawSelect('roles', { where: { name: role } }, [
        'id'
      ])

      permissionAssignment[role].forEach(async (permission) => {
        const permissionId = await queryInterface.rawSelect(
          'permissions',
          { where: { name: permission } },
          ['id']
        )

        await queryInterface.bulkInsert('permission_role', [
          {
            role_id: roleId,
            permission_id: permissionId
          }
        ])
      })
    })
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('permission_role', null, {})
    await queryInterface.bulkDelete('permissions', null, {})
  }
}
