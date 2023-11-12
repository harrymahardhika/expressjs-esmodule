import { check } from 'express-validator'
import Validator from '../../../support/Validator.js'

class GenreValidator extends Validator {
  rules = [
    check('name').notEmpty().withMessage('name is required'),
    check('description').notEmpty().withMessage('description is required')
  ]
}

export default new GenreValidator()
