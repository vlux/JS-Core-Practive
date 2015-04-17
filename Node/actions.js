var error = function(path, response) {
	response.writeHead(500, {
		"Content-Type": "text/plain"
	});
	response.write("no such action handler for " + path);
	response.end();
}

var echo = function(data, response) {
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.write(data + '\n');
	response.end();
}

var upper = function(data, response) {
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.write(data.toUpperCase() + '\n');
	response.end();
}

var lower = function(data, response) {
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.write(data.toLowerCase() + '\n');
	response.end();
}

var map = {
	"/echo": echo,
	"/upper": upper,
	"/lower": lower,
	"error": error
}

exports.map = map;
