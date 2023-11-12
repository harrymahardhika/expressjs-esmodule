import { Router } from 'express'
import permission from '../../../middlewares/permission.js'
import { Genre } from '../../../models.js'
import { permission as allowedTo } from '../../user/permission.js'
import GenreValidator from '../validators/GenreValidator.js'

const router = Router()

router.get('/', permission(allowedTo.BROWSE_GENRES), async (req, res) => {
  const authors = await Genre.findAll()

  res.json(authors)
})

router.get('/:id', permission(allowedTo.READ_GENRE), async (req, res) => {
  const author = await Genre.findByPk(req.params.id, { include: ['books'] })

  if (!author) {
    return res.status(404).json({ message: 'Genre not found' })
  }

  res.json(author)
})

router.post(
  '/',
  [permission(allowedTo.ADD_GENRE), GenreValidator.validate()],
  async (req, res) => {
    try {
      await Genre.create(req.body)
      res.status(201).json({ message: 'Genre created' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
)

router.put(
  '/:id',
  [permission(allowedTo.EDIT_GENRE), GenreValidator.validate()],
  async (req, res) => {
    const genre = await Genre.findByPk(req.params.id)

    if (!genre) {
      return res.status(404).json({ message: 'Genre not found' })
    }

    try {
      await genre.update(req.body)
      res.json({ message: 'Genre updated' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
)

router.delete('/:id', permission(allowedTo.DELETE_GENRE), async (req, res) => {
  const genre = await Genre.findByPk(req.params.id, { include: ['books'] })

  if (!genre) {
    return res.status(404).json({ message: 'Genre not found' })
  }

  if (genre.books.length > 0) {
    return res.status(400).json({ message: 'Genre has books' })
  }

  try {
    await genre.destroy()
    res.json({ message: 'Genre deleted' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})
export default router
