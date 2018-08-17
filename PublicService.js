'use strict';
const http = require('http');

http.createServer(function (request,response) {
    response.end('Hiiii');
}).listen(5000,function(request,response)  {
    console.log('Listening at 5000');
});