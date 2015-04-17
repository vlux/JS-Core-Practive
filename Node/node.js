var http = require('http')
url = require('url')
path = require('path')
fs = require('fs')

http.createServer(function(request, response) {
	var uri = url.parse(request.url).pathname;
	var filename = path.join(process.cwd(), uri);
	path.exists(filename, function(exists) {
		if (!exists) {
			response.writeHead(404, {
				"Content-Type": "text/plain"
			});
			response.write("404 Not Found");
			return;
		}
		fs.readFIle(filename, "binary", function(err, file) {
			if (err) {
				response.writeHead(500, {
					"Content-Type": "text/plain"
				});
				response.write(err + '\n');
				return;
			}
			response.writeHead(200);
			response.write(file, "binary");
			response.end();
		});
	});
}).listen(8080);

console.log("File Server running at localhost:8080");
