var http = require('http')
var url = require('url')
var actions = require('./actions');

map = actions.map;

function dispatch(request, response) {
	var data = "";
	var path = url.parse(request.url).pathname;
	request.addListener('data', function(chunk) {
		data += chunk;
	});
	request.addListener('end', function() {
		if (path in map)
			map[path](data, response);
		else
			map['error'](path, response);
	});
}

http.createServer(dispatch).listen(8080);
