function Person(){

}
var p = new Person()

//判断p对象有没有出现在Person对象的原型链上
console.log(p instanceof Person);//true
console.log(Person.prototype.isPrototypeOf(p));//true

var obj = {
  name : "why",
  age : 18,
}
var info = Object.create(obj)

console.log(info.isPrototypeOf(obj));
console.log(obj.isPrototypeOf(info));
