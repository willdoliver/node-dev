const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        // res.write('Welcome to our Home Page');
        res.end('Welcome to our Home Page');
    }
    if (req.url === '/about') {
        res.end('About page ;)');
    }
    req.end('OOPS, route not found');
});

server.listen(3000);