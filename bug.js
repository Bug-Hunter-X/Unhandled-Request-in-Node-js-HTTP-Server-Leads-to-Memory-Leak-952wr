const http = require('http');

const server = http.createServer((req, res) => {
  // This line is the bug, it will cause a memory leak if the response is never ended
  console.log('Request received');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});