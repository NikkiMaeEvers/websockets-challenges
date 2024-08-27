import { Server } from 'ws';
import { createServer } from 'http';

test('should set up WebSocket server correctly', () => {
  const server = createServer();
  const wss = new Server({ server });

  wss.on('connection', (ws) => {
    expect(typeof ws.on).toBe('function');
  });
});
