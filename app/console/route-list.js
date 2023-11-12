import listEndpoints from 'express-list-endpoints'
import app from '../../app.js'

const endpoints = listEndpoints(app)
console.log('Available routes:')
endpoints.forEach((endpoint) => {
  console.log(`${endpoint.path} -> [${endpoint.methods.join(', ')}]`)
})

process.exit(0)
