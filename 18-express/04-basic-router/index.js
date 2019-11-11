#!/usr/bin/node
const express = require('express'),
      app = express();

function r3(req,res,next){
  console.log('r3');
  next();
}function r4(req,res,next){
  console.log('r4');
  next();
}



//r1这个函数就是一个中间件,里边只有一个end
app.get('/',[r3,r4],function(req,res,next){
  console.log('r1');
  next();
},function(req,res,next){
  console.log('r2');
  res.end('okk!')
});

app.get('/json',function(req,res,next){
  res.json({'username':'William','pwd':'1130'});
  res.end();
});

app.get('/download',function(req,res,next){
  res.download('package.json');
});

app.get('/course/:id',function(req,res,next){
  console.log('id:',req.params.id);
  res.send('ok!');
});

app.get('/posts/:year/:month',function(req,res,next){
  console.log('year:',req.params.year);
  console.log('month:',req.params.month);
  res.send('ok!');
});

app.listen(8080);
