#!/usr/bin/node
const http = require('http'),
      qs = require('querystring'),
      log = console.log;

var isLogin;
var logincount;
var account;

http.createServer((req,res)=>{
  var data = '';
  if(typeof req.headers['cookie'] === 'undefined'){
    res.setHeader('Set-cookie',['isLogin = false;max-age=1000','logincount = 0;max-age=1000'])
  }else{
    //获取cookie中存的数据，并转化为数组
    var array = req.headers.cookie.split(';');
    log(array);
    //数组的第二项，转化为数组
    num = array[1].split('=');
    log(Number(num[1]));
    //看第二项的值是NaN吗，如果是就用第一项的数值
    var choose=(''+(Number(num[1])))=='NaN';
    if(choose){
      num = array[0].split('=');
    }
    logincount = Number(num[1]);
    log('numarray:'+num)
    log("logincount1:"+logincount)
  }

  if(req.method === 'POST' && req.url === '/login'){
    var user = '';
    req.on('data',(data)=>{
      return user += data;
    });
    req.on('end',()=>{
      var account1 = qs.parse(user);
      if(account1.username === 'zhangsan' && account1.pwd === '123'){
        log('user:%s,password:%s',account1.username,account1.pwd);
        logincount++;
        res.setHeader('Set-cookie',['isLogin = true;max-age=1000',`logincount=${logincount};max-age=1000`]);
        account = account1;
        showHome(res,logincount,account.username);
      }else{
        //showLogin(res);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        res.end('用户名或账号密码输入有误，请返回重新输入!')
      }
    });
  }

  if(req.method === 'GET'){
    if(isLogin){
      if(req.url === '/logout'){
        isLogin = false;
        log('logincout2:'+logincount)
        res.setHeader('Set-cookie',[`isLogin=${isLogin};max-age=600`,`logincount=${logincount};max-age=1000`]);
        showLogin(res);
      }else{
        showHome(res,logincount,account.username);
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
    +       '<input type="text" name="username"/>'
    +'      <input type="password" name="pwd"/>'
    +'      <input type="submit" value="login"/></br>'
    +     '</form>'
    +   '</body>'
    + '</html>';

  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length',Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);
}

function showHome(res,num,name){
 var html = '' 
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title>home</title>'
  + '</head>'
  + '<body>'
  +`${name}这是您第${num}次登陆`
  + '<br/>'
  +   '<a href="/logout">logout</a>'
  + '</body>'
  + '</html>';
 isLogin=true;
 log("num"+num)
 res.setHeader('Content-Type','text/html');
 res.setHeader('Content-Length',Buffer.byteLength(html));
 res.setHeader('Set-cookie',[`isLogin=${isLogin};max-age=600`,`logincount=${num};max-age=1000`]);

 res.statusCode = 200;
 res.end(html);
      
}




