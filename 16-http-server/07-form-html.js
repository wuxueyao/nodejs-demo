#!/usr/bin/node
const http = require('http'),
      log = console.log,
      url= require('url'),
      qs = require('querystring'),
      fs=require('fs'),
      items= [];
http.createServer((req,res)=>{

});

function getHTML(){
  //read html file
  var html = fs.readFileSync('todo.html').toString('utf8');

  //write real data
  html = html.replace('%',items.map(function(item){
    return '<li>'+item+'</li>';
  }).join('\n'));

  //return html string
  return html;
}





