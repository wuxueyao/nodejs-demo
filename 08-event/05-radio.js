#!/usr/bin/node

function Radio(station){
  var _listeners = {};

  /*EventEmitter.call(this);*/

  var self = this;

  setTimeout(()=>{
    self.mit('play',station);
  },0);

  setTimeout(()=>{
    self.emit('stop',station);
  },5000);
}

function emit(evt,arg){
  if(typeof(_listeners[evt])==='undefined'){
    console.error('Error:%s not defined',evt);
    process.exit(1);
  }

  _listeners[evt].forEach((fn)=>{
    fn.call(this,arg);
  });
}

this.on = (evt,fn)=>{
  if(typeof _listeners[evt]==='undefined'){
    _listeners[evt] = [];
  }
  _listeners[evt].push(fn);
};

module.exports = Radio;
