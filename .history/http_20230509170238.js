const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('Welcome to our Home Page');
    }
    if (req.url === '/about') {
        res.write('About page ;)');
    }
    res.end();
});

server.listen(3000);