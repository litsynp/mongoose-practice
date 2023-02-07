import { initializeExpressApp } from './app'
import { PORT } from './config'

async function run() {
  const app = await initializeExpressApp()

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
}

run()
