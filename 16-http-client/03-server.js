#!/usr/bin/node
const http = require('http');
http.createServer((req,res)=>{
  console.log(`${res.method}${req.url}HTTP/${req.httpVersion}`);

  console.log(req.headers);
  console.log('');
  
  res.pipe(process.stdout);

  res.end('hello client');
}).listen(8080);
