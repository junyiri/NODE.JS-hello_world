var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});

  // check if request.url is "/"
  // if it is, we show hello world
  // otherwise, we show an error
  if (request.url == "/") {
    response.end("Welcome World\n");
  } else if (request.url == "/date") {
    setInterval(function() {
      response.write(new Date() + "\n");
    }, 500);
  } else if (request.url == "/counter") {
    console.log('New connection');
    var userCount;
    userCount++
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had '+userCount+' visits!\n');
    response.end();
  } else {
    response.end("404 not found\n");
  }

// Listen on port 8000, IP defaults to 127.0.0.1
}).listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
