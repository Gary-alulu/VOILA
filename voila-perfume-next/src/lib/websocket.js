import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
let connections = new Set();

wss.on('connection', (ws) => {
  connections.add(ws);
  ws.on('close', () => connections.delete(ws));
});

export function broadcastUpdate(data) {
  connections.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}