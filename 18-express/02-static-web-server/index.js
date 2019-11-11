#!/usr/bin/node
const log = console.log,
      express = require('express'),
      app = express();

//请求一个已经存在的文件


//use使用中间件或者路由
app.use(express.static('.'));

app.listen(8080);
