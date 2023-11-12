import { Router } from 'express'
import permission from '../../../middlewares/permission.js'
import { Book } from '../../../models.js'
import { permission as allowedTo } from '../../user/permission.js'
import BookValidator from '../validators/BookValidator.js'

const router = Router()

router.get('/', permission(allowedTo.BROWSE_BOOKS), async (req, res) => {
  const books = await Book.findAll({ include: ['author', 'publisher', 'genres'] })

  res.json(books)
})

router.get('/:id', permission(allowedTo.READ_BOOK), async (req, res) => {
  const book = await Book.findByPk(req.params.id, {
    include: ['author', 'publisher', 'genres']
  })

  if (!book) {
    return res.status(404).json({ message: 'Book not found' })
  }

  res.json(book)
})

router.post(
  '/',
  [permission(allowedTo.ADD_BOOK), BookValidator.validate()],
  async (req, res) => {
    try {
      const book = await Book.create(req.body)
      await book.setGenres(req.body.genre)

      res.status(201).json({ message: 'Book created' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
)

router.put(
  '/:id',
  [permission(allowedTo.EDIT_BOOK), BookValidator.validate()],
  async (req, res) => {
    const book = await Book.findByPk(req.params.id)

    if (!book) {
      return res.status(404).json({ message: 'Book not found' })
    }

    try {
      await book.update(req.body)
      await book.setGenres(req.body.genre)
      res.json({ message: 'Book updated' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
)

router.delete('/:id', permission(allowedTo.DELETE_BOOK), async (req, res) => {
  const book = await Book.findByPk(req.params.id)

  if (!book) {
    return res.status(404).json({ message: 'Book not found' })
  }

  try {
    await book.destroy()
    res.json({ message: 'Book deleted' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

export default router
