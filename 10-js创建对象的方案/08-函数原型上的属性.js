function foo (){

}

//1.constructor属性

//foo.prototype中有一个constructor的属性

//console.log(foo.prototype); 
//属性描述器
//console.log(Object.getOwnPropertyDescriptors(foo.prototype));//打印出来可枚举为false，因此原型打印为一个空对象

// Object.defineProperty(foo.prototype,"constructor",{
//   enumerable: true,
//   configurable: true,
//   writable: true,
//   value: "哈哈哈"
// })
// console.log(foo.prototype);


//constructor的属性可获取
//prototype.constructor指向构造函数本身(foo)
// console.log(foo.prototype.constructor);//[Function: foo]
// console.log(foo.prototype.constructor.name);//foo
// console.log(foo.prototype.constructor.prototype.constructor.prototype.constructor);//[Function: foo]

//2.我们也可以添加自己的属性
/* foo.prototype.name = "why"
foo.prototype.age = 18
foo.prototype.height = 188
foo.prototype.address = "上海"//foo.prototype繁琐重复
var f1 = new foo()
console.log(f1.name,f1.age); */


//3.直接修改整个prototype对象
foo.prototype = {
  constructor: foo,
  name :"why",
  age :18,
  height: 1.88,
}
var f1 = new foo()
console.log(f1.name,f1.age,f1.height);
 
//在真实开发中，我们可以通过Object.definePrototype方式添加constructor
Object.defineProperty(foo.prototype,"constructor",{
  enumerable: false,
  configurable: true,
  writable: true,
  value: foo
})
