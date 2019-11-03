#!/usr/bin/node
const http = require('http'),
      fs = require('fs'),
      qs = require('querystring'),
      log = console.log;

var file = __dirname;

http.createServer((req,res)=>{
  var data = '';

  if(req.method === 'GET'){
    if(req.url === '/login/'){
      show(res,'login.html')
    }
  }
  if(req.method === 'POST' && req.url === '/login/'){
    var user = '';
    req.on('data',(data)=>{
      return user += data;
    });
    req.on('end',()=>{
      var account = qs.parse(user);
      if(account.username === 'admin' && account.password === 'admin'){
        log('user:%s,password:%s',account.user,account.password);
        show(res,'list.html');
        log('latter')
      }else{
        show(res,'login.html');
      }
    });
    }

}).listen(8080);


function show(res,name){
  var html = fs.readFileSync(name).toString('utf8');
  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length',Buffer.byteLength(html));
  res.statusCode = 200;
  res.end(html);
}



