#!/usr/bin/node
const http = require('http'),
      fs = require('fs'),
      qs = require('querystring'),
      log = console.log;

var isLogin;
var file = __dirname;

http.createServer((req,res)=>{
  var data = '';
  if(typeof req.headers['cookie'] === 'undefined'){
    isLogin = false;
  }else{
    var pair = req.headers['cookie'].split('=');
    isLogin = (pair[1] === 'true');
  }
  console.log(isLogin);

  if(req.method === 'POST' && req.url === '/login/'){
    var user = '';
    req.on('data',(data)=>{
      return user += data;
    });
    req.on('end',()=>{
      var account = qs.parse(user);
      if(account.username === 'admin' && account.password === 'admin'){
        log('former')
        log('user:%s,password:%s',account.user,account.password);
        isLogin = true;
        show(res,'list.html');
        log('latter')
      }else{
        show(res,'login.html');
      }
    });
  }

  if(req.method === 'GET'){
    if(isLogin){
      if(req.url === '/listmanager/'){
        isLogin = false;
        res.setHeader('Set-cookie',`login=${isLogin};max-age=600`);
        show(res,'login.html');
      }else if(req.url === '/addChapter/'){
        show(res,'addChapter.html')
      }
    }else{
      show(res,'login.html');
    }
  }

}).listen(8080);


function show(res,name){
  var html = fs.readFileSync(name).toString('utf8');
  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length',Buffer.byteLength(html));
  res.statusCode = 200;
  res.end(html);
}



