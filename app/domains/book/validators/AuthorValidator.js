import { check } from 'express-validator'
import Validator from '../../../support/Validator.js'

class AuthorValidator extends Validator {
  rules = [check('name').notEmpty().withMessage('name is required')]
}

export default new AuthorValidator()
