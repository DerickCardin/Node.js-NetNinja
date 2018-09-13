var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/README.MD', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');


myReadStream.pipe(myWriteStream);




var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/README.MD', 'utf8');
myReadStream.pipe(res);
});


server.listen(process.env.PORT, 'process.env.IP');
console.log('yo dawgs, now listening to port 3000');