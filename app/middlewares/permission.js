import { Permission, Role } from '../models.js'
export default (permission) => {
  return async (req, res, next) => {
    const user = req.user

    const permissions = await Role.findOne({
      where: { id: user.role_id },
      include: { model: Permission, as: 'permissions' }
    }).then((role) => {
      return role.permissions.map((permission) => permission.name)
    })

    if (!permissions.includes(permission)) {
      res.status(403).send({ error: 'You are not allowed to access this resource' })
      return
    }

    next()
  }
}
