// Create web server
// Create a web server that can listen to requests for /hello and responds with some HTML that says <h1>Hello World</h1>
// Bonus: Try sending different types of HTML headers/contents
// Bonus: Use different kinds of HTTP requests (GET/POST/PUT/DELETE)

var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello World</h1>');
}).listen(3000);

console.log('Server running at http://localhost:3000/');

// Create a web server that can listen to requests for /hello, /goodbye and responds with some HTML that says <h1>Hello World</h1> or <h1>Goodbye World</h1>
// Bonus: Try sending different types of HTML headers/contents
// Bonus: Use different kinds of HTTP requests (GET/POST/PUT/DELETE)
// Bonus: Use different kinds of HTTP responses (200/300/400/500)

var http = require('http');

http.createServer(function(req, res) {
  if (req.url === '/hello') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World</h1>');
  }
  if (req.url === '/goodbye') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Goodbye World</h1>');
  }
}).listen(3000);

console.log('Server running at http://localhost:3000/');

// Create a web server that can listen to requests for /hello, /goodbye, /hello/blahblah, /goodbye/blahblah and responds with some HTML that says <h1>Hello World</h1> or <h1>Goodbye World</h1> or <h1>404 Not Found</h1>
// Bonus: Try sending different types of HTML headers/contents
// Bonus: Use different kinds of HTTP requests (GET/POST/PUT/DELETE)
// Bonus: Use different kinds of HTTP responses (200/300/400/500)
// Bonus: Redirect some pages to new pages with different URLs

var http = require('http');

http.createServer(function(req, res) {
  if (req.url === '/hello') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World</h1>');
    }
    if (req.url === '/goodbye') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>Goodbye World</h1>');
    }
    if (req.url === '/hello/blahblah') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>Hello World</h1>');
    }
    if (req.url === '/goodbye/blahblah') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>Goodbye World</h1>');
    }
    else {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end('<h1>404 Not Found</h1>');
    }
}
).listen(3000);
