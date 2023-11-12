import { Permission, Role } from '../models.js'

export default (permission) => async (req, res, next) => {
  const { user } = req

  const permissions = await Role.findOne({
    where: { id: user.role_id },
    include: { model: Permission, as: 'permissions' }
  }).then((role) => role.permissions.map((p) => p.name))

  if (!permissions.includes(permission)) {
    res.status(403).send({ error: 'You are not allowed to access this resource' })
    return
  }

  next()
}
