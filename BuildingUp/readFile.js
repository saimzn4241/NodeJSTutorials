var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) { 
    fs.readFile('/home/arjun/Desktop/nodejs/demoHtml.html', function(err, data) {   
        res.writeHead(200);   
        res.write(data);   
        res.end(); 
    });
}).listen(9000);