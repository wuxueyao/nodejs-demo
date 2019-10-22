#!/usr/bin/node
const http = require('http'),
      qs = require('querystring'),
      log = console.log;

var isLogin;

http.createServer((req,res)=>{
  var data = '';
  if(typeof req.headers['cookie'] === 'undefined'){
    isLogin = false;
  }else{
    var pair = req.headers['cookie'].split('=');
    isLogin = (pair[1] === 'true');
  }
  console.log(isLogin);

  if(req.method === 'POST' && req.url === '/login'){
    var user = '';
    req.on('data',(data)=>{
      return user += data;
    });
    req.on('end',()=>{
      var account = qs.parse(user);
      if(account.username === 'wangding' && account.password === '123'){
        log('user:%s,password:%s',account.user,account.password);
        isLogin = true;
        showHome(res);
      }else{
        showLogin(res);
      }
    });
  }

  if(req.method === 'GET'){
    if(isLogin){
      if(req.url === '/logout'){
        isLogin = false;
        res.setHeader('Set-cookie',`login=${isLogin};max-age=600`);
        showLogin(res);
      }else{
        showHome(res);
      }
    }else{
      showLogin(res);
    }
  }

}).listen(8080);

function showLogin(res){
  var html = ''
    + '<!DOCTYPE html>'
    +   '<html lang="en">'
    +   '<head>'
    +     '<meta charset="UTF-8">'
    +     '<title>login</title>'
    +   '</head>'
    +   '<body>'
    +     '<form action="/login" method="post">'
    +       'username: <input type="text" name="username"/></br>'
    +'       password: <input type="password" name="password"/></br>'
    +'      <input type="submit" value="login"/></br>'
    +     '</form>'
    +   '</body>'
    + '</html>';

  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length',Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);
}

function showHome(res){
 var html = '' 
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title>home</title>'
  + '</head>'
  + '<body>'
  +   '<h1>Welcom</h1>'
  +   '<hr/>'
  +   '<a href="/logout">logout</a>'
  + '</body>'
  + '</html>';
 res.setHeader('Content-Type','text/html');
 res.setHeader('Content-Length',Buffer.byteLength(html));
 res.setHeader('Set-cookie',`login=${isLogin};max-age=600`);

 res.statusCode = 200;
 res.end(html);
      
}




