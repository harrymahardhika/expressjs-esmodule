import { Router } from 'express'
import authorController from './domains/book/controllers/author-controller.js'
import bookController from './domains/book/controllers/book-controller.js'
import genreController from './domains/book/controllers/genre-controller.js'
import publisherController from './domains/book/controllers/publisher-controller.js'
import authController from './domains/user/controllers/auth-controller.js'
import auth from './middlewares/auth.js'

const router = Router()

router.use('/auth', authController)

router.use('/authors', auth, authorController)
router.use('/books', auth, bookController)
router.use('/genres', auth, genreController)
router.use('/publishers', auth, publisherController)

export default router
