import { Sequelize } from 'sequelize'
import database from './database.js'

const env = process.env.NODE_ENV || 'development'
const sequelize = new Sequelize(database[env])

export default sequelize
