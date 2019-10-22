#!/usr/bin/node
const log = console.log,
      qs = require('querystring'),
      url = require('url'),
      http = require('http'),
      fs = require('fs');
var items = ['jisoo','lisa','jennie','rose'];//用来接收
http.createServer((req, res) =>{
  req.url = url.parse(req.url).pathname;

  //当是 GET 方法时，只显示页面
  if(req.method=== 'GET' && req.url === '/'){
    res.writeHead(200,{
      'Content-Type':'text/html'
    });
    show(res);

    //POST 方法时，可以提交数据
  }else if(req.method === 'POST' && req.url === '/'){
    //提交数据
    var it = '';
    //这里得到的data 是请求体中的数据
    req.on('data',(data)=>{
      it += data
    })
    req.on('end',()=>{
      if(typeof it !== 'undefined'){
        items.push(qs.parse(it).item)
      }
      show(res)
    })
  }else{
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain');
    res.end('Resource not found!')
  }
}).listen(8080)


//join把数组中的所有元素放入一个字符串，通过指定的分隔符进行分割
function show(res){
  var html = fs.readFileSync('./todo.html').toString('utf8'),
      items_html = items.map(function(item){
        return '<li>'+item+'</li>';
      }).join('\n');
  //将%占位符替换
  html = html.replace('%',items_html);
  res.writeHead(200,{
    'Content-Type':'text/html',
    'Content-Length':Buffer.byteLength(html),
    'Access-Control-Allow-Origin':'*'
  })
  res.end(html);
}

