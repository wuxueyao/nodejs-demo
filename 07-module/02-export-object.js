#!/usr/bin/node
var circle = {
  /**
   *计算圆的面积
   *
   *@param radius{number} 圆的半径
   *@returns {number} 圆的半径
   */
  'area':function(radius){
    return Math.PI * radius *radius;
  },
  'circumference':function(radius){
    return 2*Math.PI*radius;
  },
  'diameter':function(radius){
    return 2*radius;
  }
};

//module.exports.diameter = (radius) => 2 * radius;
//module.exports.circumference = (radius) => Math.PI * 2 * radius;
//module.exports.area = (radius) => Math.PI * radius * radius;

console.dir(circle);
