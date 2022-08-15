var obj = {
  name: 'why'
}
//obj.__proto === obj.prototype  //true
console.log(obj.__proto__);

//对象里面存在隐式原型对象：__proto__
//函数也是一个对象
//函数有显示原型对象：foo.prototype

//foo是一个函数，那么它有一个显示原型对象：foo.prototype
//foo.prototype来自哪里
//答案：一旦创建了一个函数，foo.prototype = { constructor： foo }

//因为 var foo = new Function()
//所以foo是一个对象，那么它有一个隐式原型对象：foo.__proto__
//foo.__proto__来自哪里
//new Function() =>  foo.__proto__ = Function.prototype
//Function.prototype = { constructor : Function }

function foo() {
  
}
console.log(foo.prototype === foo.__proto__);//false
console.log(foo.prototype.constructor);
console.log(foo.__proto__.constructor);

console.log(Function.prototype === Function.__proto__);



var foo1 = new foo()
var obj1 = new Object()