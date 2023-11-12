import express from 'express'
import morgan from 'morgan'
import router from './app/router.js'

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', router)

export default app
