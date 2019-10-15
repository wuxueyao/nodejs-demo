#!/usr/bin/node
const http = require('http'),
      log = console.log;
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  req.pipe(process.stdout);
  var html =''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title>hi</title>'
  + '</head>'
  + '<body>'
  + '<h1>hello world!</h1>'
  + '</body>'
  + '</html>';

if(req.url === '/'){
    //200 ok
    res.end(html);
  }else{
    //404 not found
    res.end('error');
  }
  res.end('OK!'); 
}).listen(8080);
