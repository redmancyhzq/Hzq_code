function Person(name,age){
  this.name = name
  this.age = age
  
}
var p1 = new Person("why",18)//调用时会生成一个新的对象并赋值给this，最后把this返回
console.log(p1.name,p1.age);
var p2 = new Person("Kobo",18)//调用时会生成一个新的对象并赋值给this，最后把this返回