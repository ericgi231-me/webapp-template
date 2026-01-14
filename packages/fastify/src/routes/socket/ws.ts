import type { FastifyPluginAsync } from 'fastify'
import type { WebsocketHandler } from '@fastify/websocket'

const socket: FastifyPluginAsync = async (fastify): Promise<void> => {
  const wsHandler: WebsocketHandler = (socket, request) => {
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
  
  fastify.get('/ws', { websocket: true }, wsHandler as any);
}

export default socket
