'use strict';
const http = require('http');
const httpProxy = require('http-proxy');

const url = require('url');
const qs =  require('querystring');

// Add Paths to Microservices Here
const routesToServices  = path =>
    path.startsWith('/public') ? {target:'http://localhost:5000'}
    : {target:'http://www.google.com'}

var proxy = httpProxy.createProxyServer({});

function router(request,response){
    const path = url.parse(request.url).path;
    proxy.web(request,response,routesToServices(path));
};

http.createServer(router).listen(3000,function (request,response) {
   console.log("Server is running")
});