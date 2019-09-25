#!/usr/bin/node

const stdin = process.stdin,
      stdout = process.stdout;

stdin.resume();
//从暂停状态处于流动状态



//大小写转换
stdin.on('data',function(data){
  stdout.write(data.toString('utf8').toUpperCase());
});


//不需要end，因为输出流不需要关闭
//stdin.on('end',function(){
//  stdout.end();
//})
