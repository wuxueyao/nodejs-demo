#!/usr/bin/node
const log = console.log,
      http = require('http'),
      qs = require('querystring'),
      mysql = require('mysql'),
      con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'wxy@1130',
        database:'test'
      });

function insert(item){
  con.query('insert into todo(item) values(?)',[item],(err)=>{
    if(err){
      console.error(ree.message);
      process.exit(1);
    }
    return 0;
  });
}

