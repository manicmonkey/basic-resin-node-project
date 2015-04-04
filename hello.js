var http = require('http')

var server = http.createServer(function(request, response) {
	response.write('<h1>hello world!</h1>');
	response.write('<h2>What a wonderful world :)</h2>');
	response.end();
});

server.listen(8080);
console.log('hi')
