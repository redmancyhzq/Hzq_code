function Person(name,age,height,address){
  this.name = name
  //不能通过Person.prototype.name = name 来写（普通属性不能放原型上）
  this.age = age
  this.address = address
  this.height = height
}
//把函数的东西放在原型里
Person.prototype.eating = function(){
  console.log(this.name + "在吃东西");
}
Person.prototype.running = function(){
  console.log(this.name + "在吃跑步");
}
var p1 = new Person("why",18,1.88,"北京市")
var p2 = new Person("Kobe",28,1.88,"洛杉矶")

p1.eating()
p2.eating()