import { validationResult } from 'express-validator'
class Validator {
  rules = []

  validate() {
    return [
      ...(Array.isArray(this.rules) ? this.rules : []),
      (req, res, next) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
          return res.status(422).json({
            errors: errors.array()
          })
        }

        next()
      }
    ]
  }
}

export default Validator
