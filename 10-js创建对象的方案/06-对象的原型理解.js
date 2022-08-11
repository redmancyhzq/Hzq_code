//我们每个对象中都有一个[[prototype]]，这个属性可以称之为对象的原型（隐式原型）

var obj = {name :"why"}//隐藏属性[[prototype]]原型
var info = {}//[[prototype]]

//1.解释原型的概念和看一下原型
//早期的ECMA没有规范如何查看[[prototype]]
//为了查看，给我们提供了一个属性，可以查看这个原型对象(浏览器提供)
//__proto__
//console.log(obj.__proto__);//{}
//console.log(info.__proto__);//{}


//var obj = {name: "why",__proto__: {}}
//es5之后提供的Object.getPrototypeOf
//console.log(Object.getPrototypeOf(obj));

//2.原型的作用
//当我们从一个对象中获取一个属性时，它会触发[[get]]操作
//1.在当前对象中去查找对应的属性，如果找到就直接使用
//2.如果未找到，会沿着它的原型（链）去查找[[prototype]]


//obj.age = 18
obj.__proto__.age = 18
console.log(obj.age)