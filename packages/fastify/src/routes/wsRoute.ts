import { WebsocketHandler } from '@fastify/websocket';
import type { FastifyPluginAsync } from 'fastify'

const wsRoute: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {

  const wsHandler: WebsocketHandler = (socket, _request) => {
    console.log('Client connected');
    
    socket.send('Connected to Fastify WebSocket server!');
    
    socket.on('message', (message) => {
      const text = message.toString();
      console.log('Received:', text);
      socket.send(`Echo: ${text}`);
    });
    
    socket.on('close', () => {
      console.log('Client disconnected');
    });
  };

  // @ts-expect-error - TypeScript doesn't resolve the WebSocket overload in this setup
  fastify.get('/ws', { websocket: true }, wsHandler);
}

export default wsRoute
