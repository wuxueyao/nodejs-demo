#!/usr/bin/node
const user = {
  name:'王顶',
  age:41,
  qq;'408542507'
};

const log = console.log;

log('name: %s,age: %d',user.name,user.age);
log('JSON: %j',user);

log('qq:%s',user.qq);
log('qq:',user.qq);
log('qq:'+user.qq);
log(`qq:${user.qq}`);
