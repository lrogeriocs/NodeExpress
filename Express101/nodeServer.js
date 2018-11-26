const http = require('http');
const fs = require('fs');

//the http module has the createServer
//that takes 1 arg:
//1.callback, callback has 2 args: req, res

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(fs.readFileSync('./index.html'));
    }else if (req.url ==='/style.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(fs.readFileSync('style.css'));    
    }else if (req.url ==='/node.png'){
        res.writeHead(200,{'content-type':'image/png'});
        res.write(fs.readFileSync('./node.png'));
    }else{
        res.writeHead(400,{'content-type':'text/html'});
        res.write('<h1>Not found</h1>');        
    }
    res.end();
});
server.listen(3000);

