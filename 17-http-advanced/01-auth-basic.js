#!/usr/bin/node

//这个拿浏览器验证的时候，后边加admin会让输入账号密码

const http = require('http'),
      log = console.log;
http.createServer((req,res)=>{
  log(`\n\n ${req.method} ${req.url} ${req.httpVersion}`);

  log('request headers:',req.headers);
  log('authorization:',req.headers.authorization);

  switch(req.url){
    case '/admin':
      var auth = req.headers.authorization;
      if(typeof auth !== 'undefined'){
        var usr = getUserName(auth);
        if(usr.username === 'wangding' && usr.password === '123'){
          showSecret(req,res);
        }else{
          showNormal(res);
        }
      }else{
        res.statusCode = 401;
        res.setHeader('www-authenticate','basic');
        showNormal(res);
      }
      break;

    default:
      showNormal(res);
      break;
  }


  res.end('OK!');
}).listen(8080);

function showNormal(res){
  res.end('hello');
}

function showSecret(req,res){
  res.end('hello 123')

}

function getUserName(auth){
  log('authorization:',auth);
  var ath = auth.split(' ');
  if(ath[0] === 'Basic'){
    var buf = new Buffer(ath[1],'base64');
    var usr = buf.toString('utf8').split(':');
    log('username:',usr[0]);
    log('password:',usr[1]);
  }

  return{
    username:usr[0],
    password:usr[1]
  }
  
}
