var obj1 = {}//创建了一个对象
var obj2 = new Object()//创建了一个对象
//obj.__proto__ === Object.prototype
function Person(){

}
var p = new Person()

//1.在内存中创建一个对象:  var moni = {}
//2.this的赋值：this  = moni
//3.将Person函数的显示原型prototype赋值给前面创建出来的对象的隐式原型
//moni.__proto__ = Person.prototype
//4.执行代码体
//5.返回对象

var obj = {
  name: "why",
  age: 18
}
//Object.prototype
// console.log(obj.__proto__);
// console.log(Object.prototype);
// console.log(obj.__proto__ === Object.prototype);


console.log(Object.prototype);
console.log(Object.prototype.constructor);
console.log(Object.getOwnPropertyDescriptors(Object.prototype));
