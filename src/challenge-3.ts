import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
  console.log('Connection opened');
});

ws.on('message', (data) => {
  console.log('Message from server:', data);
});

// Something is missing here that handles errors.
