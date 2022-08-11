var obj = {
  name: "why",
  age: 18,
}
//[[get]]操作
//1.在当前的对象中查找属性
//2.若没有找到,则会去原型(__proto__)对象上查找
//3/原型链就是原型上面还有原型，最终会有一个顶层原型
obj.__proto__ = {
  
}
obj.__proto__.__proto__ = {
  address: "北京"
}
obj.__proto__.__proto__.__proto__  = {
  address: "上海"
}
//原型链
console.log(obj.address);