import { check } from 'express-validator'
import Validator from '../../../support/Validator.js'

class AuthValidator extends Validator {
  rules = [
    check('email').isEmail().notEmpty().withMessage('email is required'),
    check('password').notEmpty().withMessage('password is required')
  ]
}

export default new AuthValidator()
