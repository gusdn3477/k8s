var http = require('http');
var content = function(req, res){
    res.end("Hello, Kubernetes" + "\n");
    res.writeHeader(200);
}

var w = http.createServer(content);
w.listen(8000);