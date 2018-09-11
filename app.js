var fs = require('fs');


fs.readFile('README.MD', 'utf8', function(err, data){
    fs.wrtieFile('writeMe.txt', data);
});