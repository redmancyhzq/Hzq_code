function foo() {

}
//函数也是一个对象,也有隐式原型
console.log(foo.__proto__)

//函数还会多出一个显示原型的属性：prototype
console.log(foo.prototype);

//new的作用
//创建一个对象{}
//this指向这个对象，this = {}
//会让隐式原型指向函数的显示原型 this.__proto__ = this.prototype
var p1 = new foo()
var p2 = new foo()

//console.log(f1.__proto__ === foo.prototype)//true
//console.log(f2.__proto__ === foo.prototype)//true

//p1.name = "why"
//p1.__proto__.name = "kobe"

//foo.prototype.name = "james"
p2.__proto__.name = "curry"
console.log(p1.name);