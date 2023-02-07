import express, { json } from 'express'

import { initMongoDb } from './db'
import { todoRouter } from './todo.controller'

export async function initializeExpressApp() {
  const app = express()
  await initMongoDb()

  app.use(json())

  app.get('/health', (_, res) => {
    res.status(200).json({
      status: 'ok',
    })
  })
  app.use('/todos', todoRouter)

  return app
}
