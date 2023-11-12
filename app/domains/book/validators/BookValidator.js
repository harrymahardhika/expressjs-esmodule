import { check } from 'express-validator'
import { Author, Genre, Publisher } from '../../../models.js'
import Validator from '../../../support/Validator.js'

class BookValidator extends Validator {
  rules = [
    check('title').notEmpty().withMessage('title is required'),
    check('isbn').notEmpty().withMessage('isbn is required'),
    check('page_count').notEmpty().isInt().withMessage('page_count is required'),
    check('published_at').notEmpty().isDate().withMessage('published_at is required'),

    check('author_id')
      .notEmpty()
      .custom(async (authorId) => {
        const author = await Author.findByPk(authorId)

        if (!author) {
          throw new Error('Invalid author_id')
        }
      }),

    check('publisher_id')
      .notEmpty()
      .custom(async (publisherId) => {
        const publisher = await Publisher.findByPk(publisherId)

        if (!publisher) {
          throw new Error('Invalid publisher_id')
        }
      }),

    check('genre')
      .notEmpty()
      .isArray()
      .custom(async (genres) => {
        if (genres.length === 0) {
          throw new Error('genre is required')
        }

        const allGenre = await Genre.findAll()
        const validGenres = allGenre.map((genre) => genre.id)

        if (!genres.every((genre) => validGenres.includes(genre))) {
          throw new Error('Invalid genre')
        }
      })
  ]
}

export default new BookValidator()
