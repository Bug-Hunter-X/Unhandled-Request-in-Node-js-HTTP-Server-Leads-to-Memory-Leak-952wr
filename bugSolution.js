const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request received');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});