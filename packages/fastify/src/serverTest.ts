const fastify = require('fastify')()
fastify.register(require('@fastify/websocket'))
fastify.register(async function (fastify: any) {
  fastify.get('/', { websocket: true }, (socket: any /* WebSocket */, req: any /* FastifyRequest */) => {
    socket.on('message', (message: any) => {
      message.toString() === 'hi from client'
      socket.send('hi from server')
    })
  })
})

fastify.listen({ port: 3000 }, (err: any) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})