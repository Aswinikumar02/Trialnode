var http = require("http");

http.createServer(function (request, response) {

   
   
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('server started to run on http://127.0.0.1:8085/');
