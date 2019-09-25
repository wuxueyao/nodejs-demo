#!/usr/bin/node

const EventEmitter = require('events').EventEmitter,
      util = require('util');
function Radio(station){
  EventEmitter.call(this);

  var self = this;

  //将原型里的都复制过来
  for(var m in EventEmitter.prototype){
    this[m] = EventEmitter.prototype[m];
  }
  setTimeout(()=>{
    self.emit('play',station);
  },0);

  setTimeout(()=>{
    self.emit('stop',station);
  },5000);
}

util.inherits(Radio,EventEmitter);
module.exports = Radio; //导出
