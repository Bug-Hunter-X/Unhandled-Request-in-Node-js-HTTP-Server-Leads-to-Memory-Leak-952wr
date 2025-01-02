# Node.js HTTP Server Memory Leak

This repository demonstrates a common but easily overlooked error in Node.js HTTP servers that can lead to memory leaks. The problem occurs when requests are received but the response is never explicitly ended using `res.end()`.

## Bug Description

The `bug.js` file contains a simple HTTP server.  However, it's missing a crucial step: ending the response.  Without `res.end()`, the server keeps the connection open indefinitely and continues allocating memory for each request, resulting in a memory leak.

## Bug Solution

The `bugSolution.js` file shows the corrected version. By adding `res.end()`, the server properly closes the connection after handling the request, preventing the memory leak.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js`.  Use a tool like `top` or `htop` to observe memory usage, the memory usage of the node process should keep increasing. 
4. Run `node bugSolution.js`, memory usage should be stable.
5. Use a tool such as `curl` or `ab` (Apache Bench) to send multiple requests to the server to reproduce the issue more rapidly.