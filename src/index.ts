import { Request, Server, ServerRoute } from 'hapi'
import routes from './routes'
import { forEach, random } from 'lodash'
import { PORT } from './env'

const DELAY = { min: 200, max: 800 }

const createRoute = (route: ServerRoute): ServerRoute => ({
  ...route,
  options: { cors: true },
  handler: (request: Request, responseToolkit) => {
    const delay = random(DELAY.min, DELAY.max)
    return new Promise((resolve) => {
      const handleResponse = typeof route.handler === 'function'
        ? route.handler
        : () => route.handler

      setTimeout(() => resolve(handleResponse(request, responseToolkit)), delay)
    })
  }
})

const start = async () => {
  const server = new Server({
    port: PORT,
    host: '0.0.0.0'
  })

  forEach(routes, route => server.route(createRoute(route)))

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

start()
