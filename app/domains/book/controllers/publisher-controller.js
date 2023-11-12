import { Router } from 'express'
import permission from '../../../middlewares/permission.js'
import { Publisher } from '../../../models.js'
import { permission as allowedTo } from '../../user/permission.js'
import PublisherValidator from '../validators/PublisherValidator.js'

const router = Router()

router.get('/', permission(allowedTo.BROWSE_PUBLISHERS), async (req, res) => {
  const authors = await Publisher.findAll()

  res.json(authors)
})

router.get('/:id', permission(allowedTo.READ_PUBLISHER), async (req, res) => {
  const author = await Publisher.findByPk(req.params.id, { include: ['books'] })

  if (!author) {
    return res.status(404).json({ message: 'Publisher not found' })
  }

  res.json(author)
})

router.post(
  '/',
  [permission(allowedTo.ADD_PUBLISHER), PublisherValidator.validate()],
  async (req, res) => {
    try {
      await Publisher.create(req.body)
      res.status(201).json({ message: 'Publisher created' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
)

router.put(
  '/:id',
  [permission(allowedTo.EDIT_PUBLISHER), PublisherValidator.validate()],
  async (req, res) => {
    const publisher = await Publisher.findByPk(req.params.id)

    if (!publisher) {
      return res.status(404).json({ message: 'Publisher not found' })
    }

    try {
      await publisher.update(req.body)
      res.json({ message: 'Publisher updated' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
)

router.delete('/:id', permission(allowedTo.DELETE_PUBLISHER), async (req, res) => {
  const publisher = await Publisher.findByPk(req.params.id, { include: ['books'] })

  if (!publisher) {
    return res.status(404).json({ message: 'Publisher not found' })
  }

  if (publisher.books.length > 0) {
    return res.status(400).json({ message: 'Publisher has books' })
  }

  try {
    await publisher.destroy()
    res.json({ message: 'Publisher deleted' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

export default router
