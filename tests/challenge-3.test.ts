import WebSocket from 'ws';

test('should handle errors correctly', () => {
  const ws = new WebSocket('ws://localhost:8080');
  
  ws.on('error', (error) => {
    expect(error).toBeDefined();
  });
});
