#!/usr/bin/node
const log = console.log,
      mysql = require('mysql'),
      con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'wxy@1130',
        database:'test'
      });

con.connect();

/*//增
con.query('insert into books(book_id,title,status) values(?,?,?)',['103','William',0],(err,result)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }
});




//删
con.query('delete from books where book_id = ?',[100],(err,result)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }
  console.log(result);
});*/



//改
con.query('update books set title = ? where book_id = ?',['hello chenweiting',103],(err,result)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }
  console.log(result);
});


//查
con.query('select * from books',(err,result)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }
  console.log(result);
});

con.end();

