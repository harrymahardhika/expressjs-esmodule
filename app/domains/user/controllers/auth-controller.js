import bcrypt from 'bcrypt'
import { Router } from 'express'
import randomString from 'randomstring'
import { Token, User } from '../../../models.js'
import AuthValidator from '../validators/AuthValidator.js'

const router = Router()

router.post('/', AuthValidator.validate(), async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({
    where: { email: email }
  })

  if (!user) {
    res.status(422).send({ error: 'Invalid credentials' })
    return
  }

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) {
    res.status(422).send({ error: 'Invalid credentials' })
    return
  }

  const token = randomString.generate()
  await Token.create({ user_id: user.id, token: token })
  res.json({ token: token })
})

export default router
