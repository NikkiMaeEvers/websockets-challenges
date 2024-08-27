import * as express from 'express';
import { Server } from 'ws';
import WebSocket from 'ws';

test('should echo messages correctly', (done) => {
  const app = express();
  const server = app.listen(8080);
  const wss = new Server({ server });

  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      expect(message).toBe('Hello');
      done();
    });
  });

  const client = new WebSocket('ws://localhost:8080');
  
  client.addEventListener('open', () => {
    client.send('Hello');
  });

  client.addEventListener('message', (event) => {
    expect(event.data).toBe('Hello');
    done();
  });
});
