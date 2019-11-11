const data = require('../public/data/data.json');
var express = require('express');
var router = express.Router();
var isLogin = false;

/* GET home page. */

router.get('/', function(req, res) {
  console.log(req.url); 
  res.render('login');
});

console.log(data)
console.log(data.users[0])
console.log(data.users[0].username);
var list = data.chapterList;
console.log(data.chapterList[0].title);

router.post('/',function(req,res){
  isLogin = false;
  console.log(req.body.username)
   if(req.body.username === data.users[0].username && req.body.password === data.users[0].password){
    isLogin = true;
    res.redirect('/list');
  }else{
    res.redirect('/index');
  }
});

router.get('/list',function(req,res){
  if(isLogin){
    res.render('list',{titlea:list[0].title,viewsa:list[0].views,
      titleb:list[1].title,viewsb:list[1].views,
      titlec:list[2].title,viewsc:list[2].views});
  }else{
    res.render('index',{title:'请先登录！'})
  }
});

router.get('/index',function(req,res){
  res.render('index',{title:'用户名或密码输入错误,请返回重新输入！'});
});


module.exports = router;
