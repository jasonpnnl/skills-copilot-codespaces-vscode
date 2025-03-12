// Create web server
// Create a web server that listens to incoming requests on port 3000. When a request is received, the server should respond by sending a response with the following content: "Hello, World!".

const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello, World!');
    res.end();
});

server.listen(3000);