var http = require('http');

var fs = require('fs');


var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myObj = {
        name:'Ryu',
        job: 'Ninja',
        age:29
    };
    res.end(JSON.stringify(myObj));
    
    
});


server.listen(process.env.PORT, process.env.IP);
console.log('yo dawgs, now listening to port 3000');