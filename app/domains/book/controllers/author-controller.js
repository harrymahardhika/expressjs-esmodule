import { Router } from 'express'
import permission from '../../../middlewares/permission.js'
import { Author } from '../../../models.js'
import { permission as allowedTo } from '../../user/permission.js'
import AuthorValidator from '../validators/AuthorValidator.js'

const router = Router()

router.get('/', permission(allowedTo.BROWSE_AUTHORS), async (req, res) => {
  const authors = await Author.findAll()

  res.json(authors)
})

router.get('/:id', permission(allowedTo.READ_AUTHOR), async (req, res) => {
  const author = await Author.findByPk(req.params.id, { include: ['books'] })

  if (!author) {
    return res.status(404).json({ message: 'Author not found' })
  }

  res.json(author.toJSON())
})

router.post(
  '/',
  [AuthorValidator.validate(), permission(allowedTo.ADD_AUTHOR)],
  async (req, res) => {
    try {
      await Author.create(req.body)
      res.status(201).json({ message: 'Author created' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
)

router.put(
  '/:id',
  [AuthorValidator.validate(), permission(allowedTo.EDIT_AUTHOR)],
  async (req, res) => {
    const author = await Author.findByPk(req.params.id)

    if (!author) {
      return res.status(404).json({ message: 'Author not found' })
    }

    try {
      await author.update(req.body)
      res.json({ message: 'Author updated' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
)

router.delete('/:id', permission(allowedTo.DELETE_AUTHOR), async (req, res) => {
  const author = await Author.findByPk(req.params.id, { include: ['books'] })

  if (!author) {
    return res.status(404).json({ message: 'Author not found' })
  }

  if (author.books.length > 0) {
    return res.status(400).json({ message: 'Author has books' })
  }

  try {
    await author.destroy()
    res.json({ message: 'Author deleted' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

export default router
