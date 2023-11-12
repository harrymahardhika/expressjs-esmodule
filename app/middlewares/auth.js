import { Token } from '../models.js'

export default async (req, res, next) => {
  const authToken = req.header('Authorization')
  if (!authToken) {
    res.status(401).send({ error: 'No token provided' })
    return
  }
  const userToken = await Token.findOne({
    where: { token: authToken },
    include: ['user']
  })

  if (!userToken) {
    res.status(401).send({ error: 'Invalid token' })
    return
  }

  req.user = userToken.user.toJSON()

  next()
}
