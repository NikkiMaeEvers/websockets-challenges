import express from 'express';
import { Server } from 'ws';

const app = express();
const server = app.listen(8080, () => {
  console.log('Server started on port 8080');
});

const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log('New client connected');
  // Missing line here
  ws.on('close', () => console.log('Client disconnected'));
});
