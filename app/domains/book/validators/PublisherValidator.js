import { check } from 'express-validator'
import Validator from '../../../support/Validator.js'

class PublisherValidator extends Validator {
  rules = [
    check('name').notEmpty().withMessage('name is required'),
    check('location').notEmpty().withMessage('location is required')
  ]
}

export default new PublisherValidator()
