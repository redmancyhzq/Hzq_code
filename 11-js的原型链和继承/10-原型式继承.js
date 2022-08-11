var obj = {
  name: 'why',
  age :18
}
//让新创建出来的对象的原型指向原来有的对象

//1.
//原型式继承函数 
// function createobject(o){
//   var newObj = {}
//   Object.setPrototypeOf(newObj,o)
//   return newObj
// }

//2.
// function createobject2(o){
//   function Fn(){}
//     Fn.prototype = o
//     var newObj = new Fn()
//     newObj.__proto__ = o
//     return newObj
// }
//var info = createobject2(obj)

//3.ECMA函数
var info = Object.create(obj)
console.log(info);
console.log(info.__proto__);