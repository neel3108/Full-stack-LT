var os = require('os');
var fw = require('./osinfo/firewall.js');
var sys = require('./osinfo/systeminfo.js');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json'});

  if(req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    res.end('No data found');
  }

  else if(req.url === '/api/systeminfo') {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    //var bookStore = store.booksModule;
    var d = sys.getSysteminfo();
    console.log(d);

    res.end(JSON.stringify(d));
  }
  else if(req.url === '/api/userinfo') {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    var b = fw.getStatues();
    console.log(b);

    res.end(JSON.stringify(b));
  }
 
  else {
        // request not found, send back 404
        var errorMessage = 'Error - page not found';
        res.writeHead(404, errorMessage);
        res.end(errorMessage);
  }
  
}).listen(1337, '127.0.0.1');